import { Component, OnInit } from '@angular/core';
import {register} from '../models/register';
import {ImgserviceService} from '../services/imgservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {
reg:register;
  constructor(private serv:ImgserviceService, private rout:Router) {this.reg=new register() }

  btnfunction(myfrm){
    if(myfrm.valid){
      this.reg.Fname=myfrm.value.Fname;
      this.reg.Lname=myfrm.value.Lname;
      this.reg.Age=myfrm.value.Age;
      this.reg.DOB=myfrm.value.DOB;
      this.reg.Email=myfrm.value.Email;

      alert(JSON.stringify(this.reg))

      this.serv.register(this.reg).subscribe((data)=>{
        console.log(data)
        this.rout.navigate(['imggallery'])
      })
      
    }
    else{
      alert('please enter the details')
    }
  }

  ngOnInit() {
  }

}
