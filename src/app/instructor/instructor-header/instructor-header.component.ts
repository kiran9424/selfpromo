import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-header',
  templateUrl: './instructor-header.component.html',
  styleUrls: ['./instructor-header.component.scss']
})
export class InstructorHeaderComponent implements OnInit {
  title: string;
  constructor(private authService: AuthService,
    private activeRoute: Router) { }

  ngOnInit() {
    if (this.activeRoute.url.includes('/instructor/courses')) {
      this.title = 'Create your courses';
    } else {
      this.title = 'Choose your admin page';
    }
  }

}
