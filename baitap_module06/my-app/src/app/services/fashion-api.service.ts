import { HttpClient, HttpErrorResponse, HttpHeaders } from
      '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Fashion } from '../models/fashion.model';
import {IFashion} from "../models/ifashion";
import {IBook} from "../models/ibook";
@Injectable({
  providedIn: 'root'
})
export class FashionAPIService {
  constructor(private _http: HttpClient) { }
  getFashions():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/fashions",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Fashion>),
        retry(3),
        catchError(this.handleError))
  }
  getFashion(fashionID:string):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/fashions/"+fashionID,requestOptions).pipe(
        map(res=>JSON.parse(res) as Fashion),
        retry(3),
        catchError(this.handleError))
  }
  postFashion(fashion:Fashion):Observable<any>
  {
    const headers=new HttpHeaders().set("ContentType","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    console.log(JSON.stringify(fashion))
    return this._http.post<any>("/fashions",fashion,requestOptions).pipe(
        map(res=>JSON.parse(res) as Fashion),
        retry(3),
        catchError(this.handleError))
  }
  putFashion(fashion:Fashion):Observable<any>
  {
    const headers=new HttpHeaders().set("ContentType","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.put<any>("/fashions",fashion,requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Fashion>),
        retry(3),
        catchError(this.handleError))
  }
  deleteFashion(fashionId:string):Observable<any>
  {
    const headers=new HttpHeaders().set("ContentType","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.delete<any>("/fashions/"+fashionId,requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Fashion>),
        retry(3),
        catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
}