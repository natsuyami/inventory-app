import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  // name of the columns listed in the html, pointing to the matColumnDef attribute
  displayedColumns: string[] = ['id', 'productName', 'brandName', 'category', 'shopName', 'price', 'currency', 'quantity', 'unit', 'createdBy', 'updated' ];
  // data that will be display in the table
  productSource = [];

  //declare services and other dependency, like some kind of autowiring
  constructor(public datepipe: DatePipe, private productService : ProductService) { }

  ngOnInit(): void {
    //this use the observable from product service to get all products
    this.productService.getAllProudcts().subscribe(data => {
      data.forEach(element => {
        // transform date data to readable date time format
        element.updated = this.datepipe.transform(element.updated, 'medium');
      });
      this.productSource = data;
    });
  }

}
