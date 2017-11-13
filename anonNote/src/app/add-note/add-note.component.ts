import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Note } from './../note';
import { NoteService } from './../note.service'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddNoteComponent implements OnInit {

  noteText: string;
  constructor(private _notes:NoteService) { }

  ngOnInit() {
  }

  addNewNote(){
    let newNote = new Note();
    newNote.text = this.noteText;
    this._notes.addNote(newNote);
  }
}
