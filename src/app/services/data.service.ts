import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Item} from "../../data/interface/item";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items:any[]=[];
  total=new BehaviorSubject<number>(0);
  Total=this.total.asObservable()
  bool=new BehaviorSubject<any>('');
  Bool=this.bool.asObservable()
  submitted=new BehaviorSubject<boolean>(true);
  Submitted=this.submitted.asObservable()
  constructor(private http:HttpClient) { }
  changeItem(item:any){
    this.items.push(item);
  }
  changeTotal(total:any){
    this.total.next(total);
    console.log(this.total.value);
  }
  changeBool(bool:boolean){
    this.bool.next(bool);
  }
  getAPI(options:any):Observable<any> {
    return this.http.get(options.url,{headers:options.headers});
  }
  changeSubmit(sub:boolean){
    this.submitted.next(sub);
  }
}
