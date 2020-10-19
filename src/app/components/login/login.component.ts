import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

import { CredentialModel } from '../../model/credential.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : CredentialModel = new CredentialModel();
  loginForm : FormGroup;
  hide = true;

  constructor(private formBuilder : FormBuilder, private accountService : AccountService) { }

  ngOnInit(): void {
    // initialized form with validation
    this.loginForm = this.formBuilder.group({
      'username' : [this.user.username, [
        Validators.required
      ]],
      'password' : [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    })
  }

  loginAccount() {
    let params = new HttpParams();
    params = params.set('password', this.user.password);
    params = params.set('username', this.user.username);
    params = params.set('grant_type', 'password');

    this.accountService.loginAccount(params);
    alert("Successfully login user " + this.user.username);
  }
}
