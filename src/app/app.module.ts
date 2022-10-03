import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { TemplateInitialPageComponent } from './components/template-initial-page/template-initial-page.component';
import { CardSongComponent } from './components/card-song/card-song.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    TemplateInitialPageComponent,
    CardSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
