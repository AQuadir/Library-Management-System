import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm : FormGroup;
  hidePwdContent:boolean = true;

  /**
   *
   */
  constructor(private fb : FormBuilder,private apiService : ApiService,private snackBar : MatSnackBar) {
    this.registerForm = fb.group({
      firstName: fb.control('',Validators.required),
      lastName: fb.control('',Validators.required),
      email: fb.control('',Validators.required),
      mobileNumber: fb.control('',Validators.required),
      password: fb.control('',Validators.required),
      rPassword: fb.control('',Validators.required)
    });
  }

  register(){
    let user = {
      firstName:this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      email:this.registerForm.value.email,
      mobileNumber:this.registerForm.value.mobileNumber,
      password:this.registerForm.value.password,
      //rPassword:this.registerForm.get('rPassword').value
    }

    this.apiService.register(user).subscribe({
      next: (res)=>{
        this.snackBar.open(res,'OK');
      },
      error: (err)=>{

      }
    });
  }

}
