import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpHelperService } from './http-helper.service';



@Injectable({
  providedIn: 'root'
})
export class AccountService {
  login='user/login'
  constructor(private helper:HttpHelperService) { }

  
  Login(data) {
    return this.helper.post(this.login, data);
  }
}
