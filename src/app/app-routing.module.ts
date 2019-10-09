import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
import { CoursecardComponent } from './home/coursecard/coursecard.component';
import { PagenotfountComponent } from './shared/pagenotfount/pagenotfount.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'unauthorized', component: UnauthorizedComponent },
  //{ path: '**', component: PagenotfountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
