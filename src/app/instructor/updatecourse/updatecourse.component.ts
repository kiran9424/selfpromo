import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InstructorService } from '../instructor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.scss']
})
export class UpdatecourseComponent implements OnInit {

  stepCount: any;
  courseId: any;
  coursesDeatils: any[] = [];
  newValue:any =[{}];
  oldValue;
  constructor(private instructorService: InstructorService, private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.stepCount = 1;
    this.courseId = this.router.url.split('/')[3];
    this.instructorService.getProductById(this.courseId).subscribe(
      (data) => {
        this.coursesDeatils.push(data.product);
      }, (err) => {

      })

  }

  calcStep(step) {
    return this.stepCount = step;
  }

  getValue(event){
    this.newValue.push({value:event.target.value});
    console.log(this.newValue);
    
  }

  getRequirmentValue(event){
    this.oldValue=event.target.value;
  }

}
