import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FashionComponent } from './fashion-component/fashion/fashion.component';
import { BookComponent } from './book-component/book/book.component';
import { BookDetailComponent } from './book-component/book/book-detail/book-detail.component';
import { BookNewComponent } from './book-component/book-new/book-new.component';
import { BookUpdateComponent } from './book-component/book-update/book-update.component';
import { BookDeleteComponent } from './book-component/book-delete/book-delete.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FashionNewComponent } from './fashion-component/fashion-new/fashion-new.component';
import { FashionDeleteComponent } from './fashion-component/fashion-delete/fashion-delete.component';
import { FashionUpdateComponent } from './fashion-component/fashion-update/fashion-update.component';
import { FashionDetailComponent } from './fashion-component/fashion/fashion-detail/fashion-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FashionComponent,
    BookComponent,
    BookDetailComponent,
    BookNewComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    FashionNewComponent,
    FashionDeleteComponent,
    FashionUpdateComponent,
    FashionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
