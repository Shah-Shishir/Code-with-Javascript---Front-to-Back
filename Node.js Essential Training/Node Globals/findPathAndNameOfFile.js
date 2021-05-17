const path = require("path");
const fullDirectoryName = __dirname;
const filenameWithFullDirectoryName = __filename;
const fileName = path.basename(__filename);
console.log(fullDirectoryName);
console.log(filenameWithFullDirectoryName);
console.log(fileName);