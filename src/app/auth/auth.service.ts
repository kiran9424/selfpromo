import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';

const jwt = new JwtHelperService();

class DecodeToken {
    exp: number = 0;
    name: string = '';
}
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private decodedtoken;
    constructor(private http: HttpClient,private cookierService:CookieService) {
        this.decodedtoken = JSON.parse(localStorage.getItem('promo-meta')) || new DecodeToken();
     }

    register(data): Observable<any> {
        return this.http.post('api/v1/registeruser', data);
    }
    login(data): Observable<any> {
        return this.http.post('api/v1/login', data).pipe(map(
            (token: string) => this.saveToken(token)));
    }

    saveToken(token: any): string {
        this.decodedtoken = jwt.decodeToken(token);
        localStorage.setItem('promo-auth', token);
        localStorage.setItem('promo-meta',JSON.stringify(this.decodedtoken))
        return token;
    }

    public getExpiration() {
        return moment.unix(this.decodedtoken.exp);
    }
    public isAuthenticated() {
        return moment().isBefore(this.getExpiration());
    }

    logout(){
        localStorage.removeItem('promo-auth');
        localStorage.removeItem('promo-meta');
        this.cookierService.delete('auth');
        this.decodedtoken = new DecodeToken();
    }

    public getUserNameAndRole(){
       return this.decodedtoken;
    }

    public getToken(){
        return localStorage.getItem('promo-auth');
    }

}