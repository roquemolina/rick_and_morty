const express = require('express');
const morgan = require('morgan');
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const app = require("./app");

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json());
server.use(morgan('dev'));

server.use("/rickandmorty", router);

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

/* var http = require("http");
/* PROMISES CLASES DELETED var db = require("./utils/data.js") */
/*let getCharById = require("../src/controllers/getCharById.js")

const PORT = 3001;
console.log('Hi :P')

http.createServer((req, res) => {
  console.log(`Server raised in port ${PORT}`);
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.url.includes("/rickandmorty/character")) {
    
    const newArr = req.url.split('/');
    const reqId = newArr[newArr.length - 1];
    /* const reqId = newArr[newArr - 1];
     Look db.js import below ^^^^ array 0 rick id 1
    console.log('db solo', db);
    console.log('de con json', JSON.stringify(db)) 
    */
   /* PROMISES classes deleted
    let character = db.find(char => Number(char.id) === Number(reqId));
    if(character) {
      res.writeHead(200, { "Content-Type" : "application/json" });
      return res.end(JSON.stringify(character));
    } else {
        res.writeHead(404, { "Content-Type" : "application/json" });
        return res.end(JSON.stringify({error: 'Character not found'}));
    }
    */
/*    getCharById(res, reqId)
  
  }
  



}).listen(PORT, 'localhost');

module.exports = PORT; */