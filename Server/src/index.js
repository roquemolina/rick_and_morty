var http = require("http");
var db = require("./utils/data.js")

const PORT = 3001;
console.log('Hi :P')

http.createServer((req, res) => {
  console.log(`Server raised in port ${PORT}`);
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.url.includes("/rickandmorty/character")) {
    res.writeHead(200, { "Content-Type" : "application/json" });
    const newArr = req.url.split('/');
    const reqId = newArr[newArr.length - 1] - 1;
    /* Look db.js import below ^^ array 0 rick id 1 */
    return res.end(JSON.stringify(db[reqId]));
  }

}).listen(PORT, 'localhost');

module.exports = PORT;