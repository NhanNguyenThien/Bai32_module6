import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./book-component/book/book.component";
import {BookDetailComponent} from "./book-component/book/book-detail/book-detail.component";
import {BookDeleteComponent} from "./book-component/book-delete/book-delete.component";
import {BookUpdateComponent} from "./book-component/book-update/book-update.component";
import {BookNewComponent} from "./book-component/book-new/book-new.component";
import {FashionComponent} from "./fashion-component/fashion/fashion.component";
import {FashionDetailComponent} from "./fashion-component/fashion/fashion-detail/fashion-detail.component";
import {FashionDeleteComponent} from "./fashion-component/fashion-delete/fashion-delete.component";
import {FashionUpdateComponent} from "./fashion-component/fashion-update/fashion-update.component";
import {FashionNewComponent} from "./fashion-component/fashion-new/fashion-new.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch: 'full'},
    {path:'home',component: AppComponent},
  {path:'view',children: [
      {path:'books',component: BookComponent},
      {path:'book/:id',component: BookDetailComponent},
      {path:'delete-book',component: BookDeleteComponent},
      {path:'update-book',component: BookUpdateComponent},
      {path:'new-book',component: BookNewComponent},

      {path:'fashions',component: FashionComponent},
      {path:'fashion',component: FashionDetailComponent},
      {path:'delete-fashion',component: FashionDeleteComponent},
      {path:'update-fashion',component: FashionUpdateComponent},
      {path:'new-fashion',component: FashionNewComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
