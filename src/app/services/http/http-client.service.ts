import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http : HttpClient) { }

  // create authorization for client and secret
  createAuthorizationHeader() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic bmktY2xpZW50Om5pLWNsaWVudC1zZWNyZXQ='); // temporary auth
    return headers;
  }

  // get request without parameters
  get<T>(url : string, args : T) {
    return this.getRequest(url, null, null, args);
  }

  // get request with parameter without header
  getWithParam<T>(url : string, params : HttpParams, args : T) {
    return this.getRequest(url, null, params, args);
  }

  // get request with parameter without header
  getWithDefaultHeader<T>(url : string, params : HttpParams, args : T) {
    let headers = this.createAuthorizationHeader();
    return this.getRequest(url, headers, params, args);
  }

  //get request with parameter or custom header
  getRequest<T>(url : string, headers : HttpHeaders, params : HttpParams, args : T) {
    if (headers == null) {
      return this.http.get<T>(url, {params : params});
    }

    return this.http.get<T>(url, {headers: headers, params : params});
  }

  //post request with data
  post<T>(url : string, obj : any, args : T) {
    return this.postRequest(url, obj, null, null, args);
  }

  //post request with param
  postWithParam<T>(url : string, params : HttpParams, args : T) {
    return this.postRequest(url, null, null, params, args);
  }

  //post request with param and default header
  postWithHeaderAndParam<T>(url : string, params : HttpParams, args : T) {
    let headers = this.createAuthorizationHeader();
    return this.postRequest(url, null,  headers, params, args);
  }

  //post request with body and default header
  postWithHeaderAndBody<T>(url : string, obj : any, args : T) {
    let headers = this.createAuthorizationHeader();
    return this.postRequest(url, obj, headers, null, args);
  }

  //post request with parameter or custom header
  postRequest<T>(url : string, obj : any, headers : HttpHeaders, params : HttpParams, args : T) {

    if (headers == null) {
      return this.http.post<T>(url, obj, {params});
    }

    return this.http.post<T>(url, obj, {headers: headers, params : params});
  }
}
