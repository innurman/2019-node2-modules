// https://nodejs.org/api/fs.html#fs_class_fs_dir
const fs = require('fs');

let examTxt = '아버지를 아버지라...';
fs.writeFileSync("./readme.txt", examTxt, (err) => {
    console.log("저장됨");
})

// https://nodejs.org/api/fs.html#fs_class_fs_dir
// console.log(fs.readFileSync('readme.txt', 'utf8'));

// // get the file descriptor of the file to be truncated
// const fd = fs.openSync('readme.txt', 'r+');

// // Truncate the file to first four bytes
// fs.ftruncate(fd, 4, (err) => {
//   assert.ifError(err);
//   console.log(fs.readFileSync('tereadmemp.txt', 'utf8'));
// });

let result = fs.readFileSync("./readme.txt");
console.log(result.toString());
