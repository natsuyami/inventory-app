import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CredentialModel } from '../../model/credential.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : CredentialModel = new CredentialModel();
  loginForm : FormGroup;
  hide = true;

  constructor(private formBuilder : FormBuilder) { }

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
    alert("Successfully login user " + this.user.username);
  }
}
