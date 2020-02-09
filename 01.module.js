const log = console.log;
const clear = console.clear;

log(__dirname);
log(__filename);

console.time("시간");
for(let i=0; i<10000000; i++) {

}
console.timeEnd("시간");

// C:\Users\Administrator\Documents\node-es6\07.node-modules\01.module.js
// 시간: 6.546ms
// { name: '홍길동', summary: { age: 25, gender: 'M' } }
// { name: '홍길동', summary: { age: 25, gender: 'M' } }
const obj = {
    name: "홍길동",
    summary: {
        age: 25,
        gender: "M"
    }
};
log(obj);
console.dir(obj);

// setInterval(() => {}, 1000)
// setImmediate(() => {})
// setTimeout(()=>{}, 0)

const os = require('os');

log(os.type());
log(os.uptime());
log(os.hostname());
log(os.release());

log(os.homedir());
log(os.tmpdir());
log(os.cpus());
// [
//     {
//       model: 'Intel(R) Core(TM) i3-4160 CPU @ 3.60GHz',
//       speed: 3598,
//       times: { user: 648964, nice: 0, sys: 999295, idle: 3758844, irq: 11762 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i3-4160 CPU @ 3.60GHz',
//       speed: 3598,
//       times: { user: 377725, nice: 0, sys: 628559, idle: 4400507, irq: 23103 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i3-4160 CPU @ 3.60GHz',
//       speed: 3599,
//       times: { user: 791393, nice: 0, sys: 1019544, idle: 3595729, irq: 2574 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i3-4160 CPU @ 3.60GHz',
//       speed: 3599,
//       times: { user: 176920, nice: 0, sys: 299365, idle: 4930255, irq: 842 }
//     }
//   ]
log(os.cpus().length); // 4
log(os.freemem());     // 2737131520
log(os.totalmem());    // 8247361536

const path = require('path');
let file = __filename;

log("dirname: " + path.dirname(file));
log("extname: " + path.extname(file));
log("basename: " + path.basename(file));
log("parse: " + path.parse(file));
// dirname: C:\Users\Administrator\Documents\node-es6\2019-node2-modules
// extname: .js
// basename: 01.module.js
// parse: [object Object]
log(path.parse(file));
// {
//   root: 'C:\\',
//   dir: 'C:\\Users\\Administrator\\Documents\\node-es6\\2019-node2-modules',
//   base: '01.module.js',
//   ext: '.js',
//   name: '01.module'
// }
log(path.normalize("C:\\\\\Users\\\\hi"));
// C:\Users\hi
let dir = path.join(__dirname, "../../../");
log(__dirname);
log(dir);

clear();

// https://nodejs.org/api/url.html
const url = require('url');
const query = require('querystring');
let myURL = new URL('https://nodejs.org/api/url.html#url_url_hash');
log(myURL);
log(url.format(myURL));
// URL {
//   href: 'https://nodejs.org/api/url.html#url_url_hash',
//   origin: 'https://nodejs.org',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'nodejs.org',
//   hostname: 'nodejs.org',
//   port: '',
//   pathname: '/api/url.html',
//   search: '',
//   searchParams: URLSearchParams {},
//   hash: '#url_url_hash'
// }
// https://nodejs.org/api/url.html#url_url_hash

myURL.searchParams.append("test", "0000");
log(myURL.searchParams);
// URLSearchParams { 'test' => '0000' }