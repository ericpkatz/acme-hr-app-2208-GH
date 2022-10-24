const app = require('supertest')(require('./app'));
const { expect } = require('chai');
const db = require('./db');
const { conn, Employee } = db;

describe('Our App', ()=> {
  beforeEach(async()=> {
    await conn.sync({ force: true });
    await Promise.all([
      Employee.create(),
      Employee.create(),
    ]);
  });
  describe('Data Layer', ()=> {
    it('has 2 employees', async()=> {
      const employees = await Employee.findAll();
      expect(employees.length).to.equal(2);

    });
  });
});
