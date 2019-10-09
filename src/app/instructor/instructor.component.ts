import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }

  isloggedIn(){
    if(this.authService.isAuthenticated() && this.authService.getUserNameAndRole().role==='admin'){
      return true;
    }else{
        this.router.navigate(['/unauthorized'])
    }
  }
}
