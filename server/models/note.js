// require mongoose
const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    text: { type: String, required: true},
}, {timestamps:true})

const Note = mongoose.model('Note', NoteSchema);