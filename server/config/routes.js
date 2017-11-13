const mongoose = require('mongoose');
const notes = require('../controllers/notes.js')
module.exports = function(app) {

  app.get('/', (req, res) => {
    res.render('index');
  });
  app.get('/notes', (req, res)=>{
    notes.show(req, res);
  });
  
  app.post('/notes/', (req, res)=>{
    notes.create(req, res);
  });
}