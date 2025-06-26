"use server";

import { createAdminClient, createSessionClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { Query, ID } from "node-appwrite";
import { parseStringify } from "@/lib/utils";
import { cookies } from "next/headers";
import { avatarPlaceholderUrl } from "@/constants";
import { redirect } from "next/navigation";

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", [email])],
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

export const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);

    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};

export const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);

  const accountId = await sendEmailOTP({ email });
  if (!accountId) throw new Error("Failed to send an OTP");

  if (!existingUser) {
    const { databases } = await createAdminClient();

    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        fullName,
        email,
        avatar: avatarPlaceholderUrl,
        accountId,
      },
    );
  }

  return parseStringify({ accountId });
};

export const verifySecret = async ({
  accountId,
  password,
}: {
  accountId: string;
  password: string;
}) => {
  try {
    console.log("Creating session with:", { accountId, password });
    const { account } = await createAdminClient();

    // First, create the session with the OTP
    const session = await account.createSession(accountId, password);
    console.log("Session created:", session.$id);

    // Set the cookie first
    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    // Now get the account details using the session
    const { account: sessionAccount, databases } = await createSessionClient();
    const accountDetails = await sessionAccount.get();
    
    // Update the user's accountId in your database to match current Appwrite account
    const existingUser = await getUserByEmail(accountDetails.email);
    if (existingUser) {
      await databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        existingUser.$id,
        {
          accountId: accountDetails.$id
        }
      );
      console.log("Updated user accountId in database");
    }

    console.log("Cookie set with secret:", session.secret);
    return parseStringify({ sessionId: session.$id });
  } catch (error) {
    console.error("Session creation failed:", error);
    handleError(error, "Failed to verify OTP");
  }
};


export const getCurrentUser = async () => {
  try {
    console.log("Checking current user...");
    const { databases, account } = await createSessionClient();

    const result = await account.get();
    console.log("Account result:", result);

    const user = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", result.$id)],
    );

    console.log("User lookup result:", user);

    if (user.total <= 0) {
      console.log("No user found in database");
      return null;
    }

    console.log("User found:", user.documents[0]);
    return parseStringify(user.documents[0]);
  } catch (error) {
    console.log("getCurrentUser error:", error);
  }
};

export const signOutUser = async () => {
  const { account } = await createSessionClient();

  try {
    await account.deleteSession("current");
    (await cookies()).delete("appwrite-session");
  } catch (error) {
    handleError(error, "Failed to sign out user");
  } finally {
    redirect("/sign-in");
  }
};

export const signInUser = async ({ email }: { email: string }) => {
  try {
    const existingUser = await getUserByEmail(email);

    // User exists, send OTP
    if (existingUser) {
      // Get the fresh userId from sendEmailOTP - this is needed for OTP verification
      const accountId = await sendEmailOTP({ email });
      return parseStringify({ accountId });
    }

    return parseStringify({ accountId: null, error: "User not found" });
  } catch (error) {
    handleError(error, "Failed to sign in user");
  }
};