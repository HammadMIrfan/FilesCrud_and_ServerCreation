const fs = require("fs");

const fileName = "node.txt";

// Function to create a new file with given content
function createFile(content) {
    fs.writeFileSync(fileName, content);
    console.log("File created successfully.");
}

// Function to read the content of the file
function readFile() {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (!err) {
            console.log("File content:\n", data);
        } else {
            console.error("Error reading file:", err);
        }
    });
}

// Function to update the content of the file
function updateFile(newContent) {
    fs.writeFileSync(fileName, newContent);
    console.log("File updated successfully.");
}

// Function to delete the file
function deleteFile() {
    fs.unlinkSync(fileName);
    console.log("File deleted successfully.");
}

// Example usage:

// Create a file with initial content
createFile("hello this is node file txt");

// Read the content of the file
// readFile();

// Update the content of the file
// updateFile("Updated content of the file.");

// // Read the updated content of the file
// readFile();

// // Delete the file
deleteFile();
