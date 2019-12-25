import { Component, OnInit } from '@angular/core';
import {  
  FormBuilder,  
  FormGroup ,
  Validators
} from '@angular/forms';

import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  wrongInput = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router){}

    ngOnInit() {
      this.initializeLoginForm();
    }

    initializeLoginForm(){
      this.loginForm = this.formBuilder.group({
        firstName:['',Validators.required]
      });
      return this.loginForm;
    }

    onSubmit(){
      console.log(this.loginForm.value.firstName);
      let value = this.loginForm.value.firstName;
      if(value.toLowerCase() === 'sneha')
        this.router.navigate(['contentComponent']);
      else
        this.wrongInput = true;
    }

}
