import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AccountModel } from '../../model/account.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user : AccountModel = new AccountModel();
  signupForm : FormGroup;
  hide = true;

  constructor(private formBuilder : FormBuilder, private accountService : AccountService) { }

  ngOnInit(): void {
    // initialized form with validation
    this.signupForm = this.formBuilder.group({
      'username' : [this.user.username, [
        Validators.required
      ]],
      'email' : [this.user.emailAddress, [
        Validators.required,
        Validators.email
      ]],
      'password' : [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    })
  }

  createAccount() {
    // account data to be created with default roleId
    this.user.roleId = 1;
    this.accountService.createAccount(this.user);
    alert("Successfully created user " + this.user.username);
  }
}
