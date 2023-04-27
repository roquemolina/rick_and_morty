const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('--- Test de RUTAS--', () => {
  describe('->GET /rickandmorty/character/:id', () => {
     it('Debe responder con status: 200', async () => {
      await agent.get('/rickandmorty/character/1').expect(200);
     });
     it('Debe responder un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image', async () => {
      const res = await agent.get('/rickandmorty/character/1');
      expect(res.body).toHaveProperty("id", "name", "species", "gender", "status", "origin", 'image');
     });
     xit('Debe responder con status 400 si no hay conexion', async () => {
      await agent.get('/rickandmorty/character/1').expect(400);
      /* skipeado xq anda la request de getCharById.js */
     });
  });
  describe('->GET /rickandmorty/login', () => {
     it('Debe responder un objeto { access: true } si se logueo correctamente', async () => {
      const log = await agent.get('/rickandmorty/login?email=qq%40qq.qq&password=12345q');
      expect(log.body).toEqual({"access": true});
     });
     it('Debe responder un objeto { access: false } si no se logueo correctamente', async () => {
      const log = await agent.get('/rickandmorty/login?email=qq%40qq.qq&password=112234qq');
      expect(log.body).toEqual({"access": false});
     });
  });
  describe('->POST /rickandmorty/fav', () => {
     it('Debe responder un objeto con lo que se envió en el body', async () => {
      const { body } = await agent.get('/rickandmorty/character/1');
      const fav = await agent.post('/rickandmorty/fav').send(body);
      expect(fav.body).toEqual(body);
     });
  });
});