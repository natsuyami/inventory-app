import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { ApiEndpoints } from '../constant/api-endpoints';

import { AccountModel } from '../model/account.model';
import { HttpClientService } from './http/http-client.service';
import { CredentialModel } from '../model/credential.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpService : HttpClientService) {
  }

  createAccount(user : AccountModel){
    // send data of the form to create new account
    this.httpService.post(ApiEndpoints.default.account, user, AccountModel).subscribe(data => {
      console.log(data);
    });
  }
  
  loginAccount(params : HttpParams){
    this.httpService.postWithHeaderAndParam(ApiEndpoints.default.auth, params, new CredentialModel()).subscribe(data => {
      let creds = new CredentialModel();
      creds = data;
      localStorage.setItem('token', creds.access_token);
    });
  }

}
