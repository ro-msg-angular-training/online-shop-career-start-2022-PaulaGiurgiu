import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productList: any;
  constructor(private httpClient: HttpClient) {
    this.productList=[];
  }

  ngOnInit():void {
    this.getProductList();
  }

  getProductList() {
    this.httpClient.get("http://localhost:3000/products").subscribe((result:any)=> {
      this.productList = result;
    });
  }
}
