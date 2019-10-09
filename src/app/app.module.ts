import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { BlogcardComponent } from './home/blogcard/blogcard.component';
import { CoursecardComponent } from './home/coursecard/coursecard.component';
import { HeadersComponent } from './headers/headers.component';
import { AuthModule } from './auth/auth.module';
import { InstructorModule } from './instructor/instructor.module';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
import { PagenotfountComponent } from './shared/pagenotfount/pagenotfount.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    BlogcardComponent,
    CoursecardComponent,
    HeadersComponent,
    UnauthorizedComponent,
    PagenotfountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    InstructorModule
  ],
  exports:[
    HeadersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
