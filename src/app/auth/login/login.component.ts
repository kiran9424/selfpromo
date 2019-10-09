import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: any = {}
  errors: String;
  constructor(private activeRoute: ActivatedRoute,
    private toastr: ToastrService,
    private authService: AuthService,
    private router:Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['registered'] === 'true') {
        this.toastr.success('Successfully registered. Please login', 'Success');
      }
    })
  }

  loginUser() {
    this.authService.login(this.loginData).subscribe(
      (token) => {
        this.router.navigate(['/home']);
      }, (errorResponse) => {
        this.errors =errorResponse.error.message;
        window.scrollTo(0,0);
      })
  }

}
