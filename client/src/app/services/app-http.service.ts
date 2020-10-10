import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Items} from '../models/items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor(private http:HttpClient) { }

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  get(url: string){
    return this.http.get(url,this.httpOptions);
  }
  putStock(url:string,items:Items[]){
    console.log("post call to backend",items);
     this.http.post(url,items,this.httpOptions).subscribe(res=>{
      console.log(res); 
      return res;},err=>console.log(err));
  }
  addItem(url:string,item){
    this.http.post(url,item,this.httpOptions).subscribe(res=>{return res},err=>console.log(err));
  }
  deleteItem(url:string,item){
    this.http.post(url,item,this.httpOptions).subscribe(res=>{return res},err=>console.log(err));
  }
  addMember(url:string,customer){
    this.http.post(url,customer,this.httpOptions).subscribe(res=>{return res},err=>console.log(err));
  }
  getMember(url:string){
     return this.http.get(url,this.httpOptions);
  }
}
