import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm : FormGroup;

  /**
   *
   */
  constructor(private fb : FormBuilder) {
    this.registerForm = fb.group({
      firstName: fb.control('',Validators.required),
      lastName: fb.control('',Validators.required),
      email: fb.control('',Validators.required),
      mobile: fb.control('',Validators.required),
      password: fb.control('',Validators.required),
      rPassword: fb.control('',Validators.required)
    });
  }

}
