import { Component } from '@angular/core';
import {FashionAPIService} from "../../services/fashion-api.service";


@Component({
  selector: 'app-fashion-delete',
  templateUrl: './fashion-delete.component.html',
  styleUrls: ['./fashion-delete.component.css']
})
export class FashionDeleteComponent {
  fashions:any
  errMessage:any
  constructor(private _service: FashionAPIService){
      try {
          this.fashions = this._service.getFashions();
      }catch (err){
         console.error(err);
         this.errMessage = err;
      }
  }
  deleteFashion(fashionId:any)
  {
   this._service.deleteFashion(fashionId).subscribe({
      next:(data)=>{
        this.fashions = this._service.getFashions();
      },
      error:(err)=>{this.errMessage=err}
    })
  }
}
