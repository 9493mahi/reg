import { Injectable } from '@angular/core';
import{imggallery, register}from '../models/register';
import{HttpClient,HttpHeaders}from '@angular/common/http';
import{Observable}from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImgserviceService {
  url: string = "http://localhost:4500"
  url1: string="http://localhost:4500/gallery"
  constructor(private htc:HttpClient) { }

  Addimg(img: imggallery): Observable<any> {
    console.log(JSON.stringify(img));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url1 , JSON.stringify(img), httpOptions)
  }

  GetAllimg(): Observable<any> {
    return this.htc.get(this.url1, { responseType: 'json' })
  }
  
  DeleteImg(imgid: number): Observable<any> {
    return this.htc.delete(this.url1 + '/' + imgid, { responseType: 'json' })
  }

  register(reg:register ): Observable<any> {
    console.log(JSON.stringify(reg));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url+'/', JSON.stringify(reg), httpOptions)
  }
}
