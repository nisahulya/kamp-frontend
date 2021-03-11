import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService} from 'src/app/services/product.service';
import { ProductResponseModel } from 'src/app/models/productResponseModel';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent implements OnInit {
  dataLoaded = false;

  products:Product[] = [];
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    })
  }
}
