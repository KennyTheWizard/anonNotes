import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Note } from './note'
import 'rxjs/add/operator/map';
@Injectable()
export class NoteService {

  notesList:Note[];
  constructor(private _http:Http) { }

  getNotes(){
    return this._http.get('/notes').map(resp => resp.json()).toPromise().then((resp)=>{
        this.notesList = resp;
        console.log(this.notesList)
      }).catch((errors)=>{
        console.error(errors);
      });
  }
  addNote(newNote:Note){
    this._http.post('/notes', newNote).toPromise().then((resp)=>{
      console.log(resp);
      return this.getNotes();
    }).catch((errors)=>{
      console.error(errors);
    })
  }

}
