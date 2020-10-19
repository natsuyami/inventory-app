import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { ProductService } from '../../../../services/product.service';
import { QueryProperties } from '../../../../constant/query-properties';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  // name of the columns listed in the html, pointing to the matColumnDef attribute
  displayedColumns: string[] = ['id', 'productName', 'brandName', 'category', 'shopName', 'price', 'currency', 'quantity', 'unit', 'createdBy', 'updated' ];
  // data that will be display in the table
  productSource = [];

  //declare services and other dependency, like some kind of autowiring
  constructor(public datepipe: DatePipe, private productService : ProductService) { }

  ngOnInit(): void {
    let params = new HttpParams();
    params = params.set('page','1');
    params = params.set('size', QueryProperties.size);

    //this use the observable from product service to get all products
    this.productService.getAllProudcts(params).subscribe(data => {
      data.forEach(element => {
        // transform date data to readable date time format
        element.updated = this.datepipe.transform(element.updated, 'medium');
      });
      this.productSource = data;
    });
  }

}
