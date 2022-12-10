/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterfaceBase } from './interfaces/login.interface';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login$!: boolean;
  login: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  navigate(): void {
    this.router.navigate(['app']);
  }

  logForm() {
    this.search(this.login.value);
  };


  search(login: LoginInterfaceBase){
    this.login$ = this.loginService.postLogin(login);
    if(this.login$ === true){
      this.navigate();
    }
  }
}
