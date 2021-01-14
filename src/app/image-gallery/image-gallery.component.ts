import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import {ImgserviceService}from '../services/imgservice.service';
import { imggallery } from '../models/register';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  imagegallery:any
  

  constructor(private imgserv:ImgserviceService,private router:Router) {}

  btnDel(imgid: number) {
    this.imgserv.DeleteImg(imgid).subscribe((data) => {
      console.log(data)
      alert('deleted succesfully')
      this.router.navigate(['imggallery'])
    })
    location.reload()
  }

  btnAdd() {
    this.router.navigate(['addimg'])
  }
  ngOnInit() { 
    this.imgserv.GetAllimg().subscribe((data) => {
      console.log(data)
      this.imagegallery = data;
  })
  }

}
