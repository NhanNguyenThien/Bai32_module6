import { Component } from '@angular/core';
import {Fashion} from "../../models/fashion.model";
import {FashionAPIService} from "../../services/fashion-api.service";

@Component({
  selector: 'app-fashion-update',
  templateUrl: './fashion-update.component.html',
  styleUrls: ['./fashion-update.component.css']
})
export class FashionUpdateComponent {
  fashion=new Fashion();
  fashions:any
  errMessage:string=''
  constructor(private _service: FashionAPIService){
    this._service.getFashions().subscribe({
      next:(data)=>{this.fashions=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  putFashion()
  {
    this._service.putFashion(this.fashion).subscribe({
      next:(data)=>{this.fashions=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  onFileSelected(event:any,fashion:Fashion) {
    let me = this;
    let file = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image=reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
