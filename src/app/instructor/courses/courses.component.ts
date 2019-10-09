import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: any[] = [];
  constructor(private authService: AuthService,
    private router: Router,
    private instructorService: InstructorService) { }

  ngOnInit() {
    this.instructorService.getInstructorCourse().subscribe(
      (data) => {
        this.courses = data.product;
      }, () => {

      })
  }

  isInstructor() {
    if (this.authService.getUserNameAndRole().role === 'admin') {
      return true;
    } else {
      this.router.navigate(['/unauthorized'])
    }
  }

  status(button, stat) {
    if (stat === 'published') {
      return 'is-success'
    } else if (stat === 'active') {
      return 'is-info';
    } else if (stat === 'inactive') {
      return 'is-warning';
    } else if (stat === 'deleted') {
      return 'is-danger';
    } else {
      return '';
    }
  }
}
