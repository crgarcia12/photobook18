import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PicturesViewerComponent } from './pictures-viewer/pictures-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    PicturesViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
