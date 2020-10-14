import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiEndpoints } from '../constant/ApiEndpoints';

import { ProductDetailsModel } from '../model/product.details.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { 

  }

  getAllProudcts(): Observable<ProductDetailsModel[]>{
    // get all products
    return this.http.get<ProductDetailsModel[]>(ApiEndpoints.default.product);
  }
}
