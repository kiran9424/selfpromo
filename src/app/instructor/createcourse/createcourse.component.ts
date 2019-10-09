import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstructorService } from '../instructor.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.scss']
})
export class CreatecourseComponent implements OnInit {
  maxLength: number = 50;
  step: number = 1;
  stepForm: FormGroup;
  categories = [];

  constructor(private fb: FormBuilder,
    private instructorService: InstructorService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.instructorService.getCategories().subscribe(
      (data) => {
        this.categories = data.category;
      }, () => {

      })
  }



  increaseStep() {
    if (this.step === 2) {
      return false;
    }
    return this.step++;
  }

  decreaseStep() {
    if (this.step === 1) {
      return false;
    } else {
      this.step--;
    }
  }

  createForm() {
    this.stepForm = this.fb.group({
      title: ['', Validators.required],
      category: [null, Validators.required]
    });

  }

  createCourse() {
    this.instructorService.createCourse(this.stepForm.value).subscribe(
      ()=>{
        this.router.navigate(['/instructor/courses'])
    },()=>{

    })
    
  }

  isInstructor() {
    if (this.authService.getUserNameAndRole().role === 'admin') {
      return true;
    } else {
      this.router.navigate(['/unauthorized']);
    }
  }

  characterCount(event) {
    if (event.target.value.length === 50) {
      return false;
    } else if (event.target.value.length <= 50) {
      return this.maxLength--;
    } else if (event.target.value.length === 0) {
      return false;
    } else {
      return 0;
    }


  }

}
