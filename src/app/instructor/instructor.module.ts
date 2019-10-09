import { NgModule } from '@angular/core';
import { InstructorComponent } from './instructor.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurd } from '../auth/auth.gaurd';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { InstructorHeaderComponent } from './instructor-header/instructor-header.component';
import { InstructorService } from './instructor.service';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { TargetstudentsComponent } from './updatecourse/targetstudents/targetstudents.component';
import { CourselandingComponent } from './updatecourse/courselanding/courselanding.component';
import { PricingComponent } from './updatecourse/pricing/pricing.component';
import { StatusComponent } from './updatecourse/status/status.component';
import { PagenotfountComponent } from '../shared/pagenotfount/pagenotfount.component';

const route: Routes = [
    { path: 'instructor', component: InstructorComponent, canActivate: [AuthGaurd] },
    {
        path: 'instructor/courses', component: CoursesComponent, canActivate: [AuthGaurd],

    },
    { path: 'instructor/courses/create', component: CreatecourseComponent, canActivate: [AuthGaurd] },
    { path: 'instructor/courses/:id/update', component: UpdatecourseComponent,canActivate:[AuthGaurd] },
    //{ path: '**', component: PagenotfountComponent }
]
@NgModule({
    declarations: [InstructorComponent, CoursesComponent, InstructorHeaderComponent, CreatecourseComponent, UpdatecourseComponent, TargetstudentsComponent, CourselandingComponent, PricingComponent, StatusComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        InstructorService
    ],
    exports: [
        InstructorComponent,
        CoursesComponent,
        CreatecourseComponent
    ]
})
export class InstructorModule {

}