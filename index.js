
const prizes = ["特等奖", "一等奖", "二等奖", "三等奖", "参与奖"];
exports.handler = (req, resp, context) => {
    // const dotenv = require("dotenv");
    // dotenv.config();
    // const { Client } = require('pg')
    // const client = new Client({
    //     user: process.env.PGUSER,
    //     host: process.env.PGHOST,
    //     database: process.env.PGDATABASE,
    //     password: process.env.PGPASSWORD,
    //     port: process.env.PGPORT,
    // })
    // client.connect();
    var params = {
        path: req.path,
        queries: req.queries,
        headers: req.headers,
        params : req.method,
        requestURI : req.url,
        clientIP : req.clientIP
    }
        resp.setHeader('Content-Type', 'application/json');
        if(params.params === 'GET' && params.queries.action === 'lottery'){
            const randomIndex = Math.floor(Math.random() * prizes.length);
            const result = prizes[randomIndex];
            resp.send(`恭喜您抽中了${result}!`);
        }else{
            resp.send('404 Not Found');
        }
}

