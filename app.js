const express = require('express');
const path = require('path');
const { Employee } = require('./db');

const app = express();

app.use('/dist', express.static('dist'));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));
app.get('/api/employees', async(req, res, next)=> {
  try {
    res.send(await Employee.findAll({
      attributes: {
        exclude: ['bio']
      }
    }));
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/employees/:id', async(req, res, next)=> {
  try {
    res.send(await Employee.findByPk(req.params.id));
  }
  catch(ex){
    next(ex);
  }
});

module.exports = app;
