import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoteService } from './note.service';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ListNotesComponent } from './list-notes/list-notes.component';


@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    ListNotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ NoteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
