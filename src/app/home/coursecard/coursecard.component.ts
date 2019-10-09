import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/instructor/instructor.service';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.scss']
})
export class CoursecardComponent implements OnInit {

  courses: any[] = [];
  constructor(private instructorService: InstructorService) { }

  ngOnInit() {
    this.instructorService.getAllProducts().subscribe(
      (data) => {
        data.product.forEach(el => {
          if (el.status === 'published') {
            this.courses.push(el);
          }
        });
      }, (error) => {

      });
  }

}
