const fs = require('fs');
const path = require('path');
const {sep} = path;
const rootPath = path.resolve(path.dirname(__dirname), 'blog'); // 根目录

console.log(rootPath);

let pathArr = {};

let readDir = dirPath => {
    let exists = fs.existsSync(dirPath);
    let stat = fs.statSync(dirPath);
    if (exists && stat) {
        if (stat.isFile()) {
            let pathWithoutRootArr = dirPath.replace(rootPath + sep, '').split(sep);
            if (pathWithoutRootArr.length === 2 ) {
                if (pathArr.hasOwnProperty(pathWithoutRootArr[0])) {
                    pathArr[pathWithoutRootArr[0]].push(pathWithoutRootArr[1]);
                }else {
                    pathArr[pathWithoutRootArr[0]] = new Array(1).fill(pathWithoutRootArr[1]);
                }
            }
        }else if(stat.isDirectory()) {
            let files = fs.readdirSync(dirPath);
            if (files && files.length > 0) {
                files.forEach(function (file) {
                        readDir(dirPath + sep + file); //递归
                    })
                }
            }
        }
};

readDir(rootPath);

let sidebar = {};
for(let key in pathArr) {
    let children = [];
    let link = '';
    let title = '';
    console.log(pathArr[key]);
    let files = pathArr[key];
    files.forEach(filesname => {
        if(filesname.indexOf('.md') > 0) {
            if (filesname === 'README.md') filesname = '';
            children.push(filesname.replace(/\.md/gi, ''))
        }
    });
    title = key;
    sidebar[`/blog`+`/${key}/`] = [{title, children}];
}

console.log(sidebar);

module.exports = sidebar;