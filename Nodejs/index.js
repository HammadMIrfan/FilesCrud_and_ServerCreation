const fs = require("fs");

const fileName = "node.txt";

function createFile(content) {
    fs.writeFileSync(fileName, content);
    console.log("File created successfully.");
}
function readFile() {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (!err) {
            console.log("File content:\n", data);
        } else {
            console.error("Error reading file:", err);
        }
    });
}
function updateFile(newContent) {
    fs.writeFileSync(fileName, newContent);
    console.log("File updated successfully.");
}
function deleteFile() {
    fs.unlinkSync(fileName);
    console.log("File deleted successfully.");
}


createFile("hello this is node file txt");
readFile();

// Update the content of the file
// updateFile("Updated content of the file.");

// // Read the updated content of the file
// readFile();

// // Delete the file
deleteFile();
