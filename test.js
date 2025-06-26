const { Client, Account } = require("node-appwrite");
const { appwriteConfig } = require("./lib/appwrite/config");

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("685a3e3200182752f584");

async function testProjectId() {
    try {
        const account = new Account(client);
        await account.get(); // Will fail if not logged in, but proves the project ID is valid
        console.log("Project ID is valid and Appwrite is reachable.");
    } catch (err) {
        if (err.code === 401) {
            console.log("Project ID is valid, but not authenticated (expected for guests).");
        } else if (err.code === 404) {
            console.log("Project ID is invalid or not found.");
        } else {
            console.error("Error:", err.message);
        }
    }
}

testProjectId();
