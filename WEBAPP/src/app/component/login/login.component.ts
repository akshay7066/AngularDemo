import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { HttpHelperService } from 'src/app/http-helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private fb:FormBuilder, private accountService:AccountService ,) { }
  LoginForm:FormGroup;
  submitted:boolean=false;
  get mainForm(){
    return this.LoginForm.controls;
  }
  ngOnInit(): void {
    this.LoginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login() {
    this.submitted=true;
    if(this.LoginForm.valid){
      this.accountService.Login(this.LoginForm.value).subscribe((res)=>{
        console.log(res);
        this.router.navigateByUrl('dashboard/home');
      })
    }
  
  }
  forgotPassword() {
    this.router.navigate(['/forgot']);
  }

}
