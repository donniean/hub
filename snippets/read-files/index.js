const path = require("path");
const fs = require("fs");

const filesPath = path.resolve(__dirname, "..");
const outputFile = "code.txt";

readDir(filesPath)
    .then(files => readFiles(files))
    .then(readFiles => Promise.all(readFiles))
    .then(list => getCode(list))
    .then(data => writeFile(outputFile, data))
    .then(() => console.log("write file success !"))
    .catch(err => console.log(err));

function readDir(path) {
    return new Promise((resolve, rejece) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

function readFiles(files) {
    let readFiles = [];
    const re = /((\.html)|(\.css)|(\.js)|(\.md)|(\.json))$/i;
    for (const file of files) {
        if (re.test(file)) {
            const filePath = path.resolve(filesPath, file);
            readFiles.push(readFile(filePath));
        }
    }
    return readFiles;
}

function readFile(path, options = { encoding: "utf-8" }) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFile(file, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function getCode(list) {
    let arr = [];
    for (const data of list) {
        arr.push(handleText(data));
    }
    return arr.join("\n");
}

function handleText(data) {
    const rows = data.split(/\n|\r|\n\r|\r\n/);
    let newRows = [];
    for (let row of rows) {
        row.trim() && newRows.push(row);
    }
    return newRows.join("\n");
}
