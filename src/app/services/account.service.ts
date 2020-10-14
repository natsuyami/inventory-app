import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiEndpoints } from '../constant/ApiEndpoints';

import { AccountModel } from '../model/account.model';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) {
  }

  createAccount(user : AccountModel){
    // send data of the form to create new account
    this.http.post<AccountModel>(ApiEndpoints.default.account, user).subscribe(data => {
      console.log(data);
    });
  }

}
