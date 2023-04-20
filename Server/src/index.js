var http = require("http");
var db = require("./utils/data.js")

const PORT = 3001;
console.log('Hi :P')

http.createServer((req, res) => {
  console.log(`Server raised in port ${PORT}`);
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.url.includes("/rickandmorty/character")) {
    
    const newArr = req.url.split('/');
    const reqId = newArr[newArr.length - 1];
    /* const reqId = newArr[newArr - 1]; */
    /* Look db.js import below ^^^^ array 0 rick id 1 */
    /* console.log('db solo', db);
    console.log('de con json', JSON.stringify(db)) */
    let character = db.find(char => Number(char.id) === Number(reqId));
    if(character) {
      res.writeHead(200, { "Content-Type" : "application/json" });
      return res.end(JSON.stringify(character));
    } else {
        res.writeHead(404, { "Content-Type" : "application/json" });
        return res.end(JSON.stringify({error: 'Character not found'}));
    }
  }

}).listen(PORT, 'localhost');

module.exports = PORT;