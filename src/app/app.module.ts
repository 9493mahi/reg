import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';

import {Routes,RouterModule} from '@angular/router';
import { RegistationComponent } from './registation/registation.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { AddimgComponent } from './addimg/addimg.component';
import { ImgserviceService } from './services/imgservice.service';

const routes:Routes=[
  {path:'imggallery',component:ImageGalleryComponent},
  {path:'',component:RegistationComponent},
  {path:'addimg',component:AddimgComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistationComponent,
    ImageGalleryComponent,
    AddimgComponent
  ],
  imports: [
    BrowserModule
    , FormsModule,RouterModule.forRoot(routes),HttpClientModule],
  providers: [ImgserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
