import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm : FormGroup;
  hidePwdContent : boolean = true;

  constructor(private fb : FormBuilder) {
    this.loginForm = fb.group({
      email: fb.control('',Validators.required),
      password: fb.control('',Validators.required)
    });
  }

  login(){
    let loginInfo = {
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
  }
}
