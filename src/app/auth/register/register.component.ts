import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  errors: string;
  isLoading: boolean = false;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  registerForm() {
    this.authService.register(this.signupForm.value).subscribe(
      (data) => {
        setTimeout(() => {
          this.router.navigate(['/login', { registered: 'true' }]);
          this.isLoading = true;
        }, 3000);

      }, (error) => {
        this.errors = error.error.message;
        window.scrollTo(0, 0);
      })
  }

}
