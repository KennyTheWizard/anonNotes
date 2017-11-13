import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Note } from './../note';
import { NoteService } from './../note.service'

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListNotesComponent implements OnInit {

  constructor(private _notes:NoteService) { }

  ngOnInit() {
    this._notes.getNotes();
  }

}
