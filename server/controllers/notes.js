const mongoose = require('mongoose');
const Note = mongoose.model('Note');;

module.exports = {
  show: function(req, res) {
    Note.find({}).sort('-createdAt').then((note)=>{
        console.log(note); 
        return res.json(note);
      }).catch((errors)=>{
        console.log(errors);
      });
    },
    create: function(req, res) {
      let note = new Note(req.body);
      console.log(req.body);
      note.save().then((resp) => {
        return res.json(resp);
      }).catch((errors)=>{
        console.log(errors);
        return res.json(errors);
    });
    
  }
}