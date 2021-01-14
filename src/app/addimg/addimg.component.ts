import { Component, OnInit } from '@angular/core';
import { imggallery } from '../models/register';
import { Router } from '@angular/router';
import { ImgserviceService } from '../services/imgservice.service';
import {Subscriber} from 'rxjs'

@Component({
  selector: 'app-addimg',
  templateUrl: './addimg.component.html',
  styleUrls: ['./addimg.component.css']
})
export class AddimgComponent implements OnInit {
  img: imggallery;

  constructor(private imgserv: ImgserviceService, private router: Router) { this.img = new imggallery() }

  onSelect(event) {

    if (event.target.files && event.target.files[0]) {
      let rdr = new FileReader();
      rdr.readAsDataURL(event.target.files[0])
      rdr.onload = (ev: any) => {
        this.img.Image = ev.target.result
      }
    }

    console.log(this.img.Image)
  }
  btnAdd(myfrm: any) {
    if (myfrm.valid) {
      this.img.Image = this.img.Image.replace('data:image/jpeg;base64,', '')
      this.img.Image = this.img.Image.replace('data:image/jpg;base64,', '')
      this.img.Image = this.img.Image.replace('data:image/png;base64,', '')
      this.img.Image = this.img.Image.replace('data:image/gif;base64,', '')

      alert(this.img.Image)
      this.img.Imgid = myfrm.value.Imgid
      this.img.Imgname = myfrm.value.Imgname;
      
  // alert(JSON.stringify(this.img))


      this.imgserv.Addimg(this.img).subscribe((data) => {
        console.log(data);
        //alert(data.message)
        this.router.navigate(['imggallery'])
      });
    }
  }
  ngOnInit() {
  }

}
