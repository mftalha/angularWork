import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoComponent } from './todo.component';
import { Todo2Component } from './todo2/todo2.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent, //yeni oluşturdugumuz compenenti ekliyoruz.
    Todo2Component 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
