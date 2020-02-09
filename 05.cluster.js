const http = require('http');
const cluster = require('cluster');

const cpus = require('os').cpus();
const cpuLen = cpus.length;

if (cluster.isMaster) {
    for(let i=0; i<cpuLen; i++) {
        cluster.fork();
        cluster.on('exit', (worker, code, signal) => {
            console.log(worker.process.pid);
            cluster.fork();
        });
    }
}
else {
    http.createServer((req, res) => {
        console.log(process.pid + "CPU 실행");
        res.end($`{process.pid} 응답`)
    });
    console.log(process.pid)
}


// C:\Users\Administrator\Documents\node-es6\06.sequelize>npm i -g pm2
// C:\Users\Administrator\Documents\node-es6\06.sequelize>pm2 start app.js -i 0	
// C:\Users\Administrator\Documents\node-es6\06.sequelize>pm2 start ./bin/www -i 0
// C:\Users\Administrator\Documents\node-es6\06.sequelize>pm2 list
// C:\Users\Administrator\Documents\node-es6\06.sequelize>pm2 kill