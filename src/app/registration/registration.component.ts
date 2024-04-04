import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  router: any;
  

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(17)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{}|;:'",.<>?])(?=.*[0-9])[A-Za-z0-9!@#$%^&*()-_=+{}|;:'",.<>?]{8,}$/)]],
      checkbox: [null, Validators.requiredTrue],
    });
    
  }
  get fullName() {
    return this.registerForm.get('fullName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get checkbox() {
    return this.registerForm.get('checkbox');
  }


  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);

  }

  
}
