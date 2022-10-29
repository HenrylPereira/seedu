import { Injectable } from '@angular/core';
import { dadosLogin } from 'mocks/login.mock';
import { of } from 'rxjs';
import { LoginInterface, LoginInterfaceBase } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  postLogin(login: LoginInterfaceBase) {
    if(dadosLogin.find(dado => (dado.password === login.password) && (dado.email === login.email))){
      return true;
    };
  }
}
