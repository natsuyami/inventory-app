import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { ApiEndpoints } from '../constant/api-endpoints';

import { ProductDetailsModel } from '../model/product.details.model';
import { HttpClientService } from './http/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService : HttpClientService) { 

  }

  getAllProudcts(params : HttpParams): Observable<ProductDetailsModel[]>{
    // get all products
    return this.httpService.getWithParam(ApiEndpoints.default.product, params, Array<ProductDetailsModel>());
  }
}
