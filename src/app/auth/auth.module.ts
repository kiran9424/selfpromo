import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { AuthGaurd } from './auth.gaurd';
import { AuthInterceptor } from './auth.interceptor';
import { AppModule } from '../app.module';
import { PagenotfountComponent } from '../shared/pagenotfount/pagenotfount.component';

const router: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [AuthGaurd] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGaurd] },
    
];

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent],
    exports: [AuthComponent, LoginComponent, RegisterComponent],
    imports: [
        RouterModule.forRoot(router),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
    ],
    providers: [
        AuthService,
        CookieService,
        AuthGaurd,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class AuthModule {

}