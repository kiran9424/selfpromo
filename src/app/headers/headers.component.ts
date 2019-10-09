import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  userName:string;
  role:string;
  constructor(public authService: AuthService,private router:Router) { 
    
  }

  ngOnInit() {
    
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  

}
