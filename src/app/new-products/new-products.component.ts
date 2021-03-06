import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {

  products;
  now = new Date();

  constructor() { }

  ngOnInit(): void {
    this.products = products.filter(p => p.availabilityDate.getDate() <= this.now.getDate()).sort().slice(0, 6);
  }

}
