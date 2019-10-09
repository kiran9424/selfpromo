import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGaurd implements CanActivate {
    private url: string;

    private handleAuthState(): boolean {
        if (this.isLoginOrRegister()) {
            this.router.navigate(['/home'])
            return false;
        }
        return true;
    }

    private handleNotAuthState(): boolean {
        if (this.isLoginOrRegister()) {

            return true;
        }
        this.router.navigate(['/login'])
        return false;
    }

    private isLoginOrRegister(): boolean {
        if (this.url.includes('login') || this.url.includes('register')) {
            return true;
        } else {
            return false;
        }
    }
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.url = state.url;
        if (this.authService.isAuthenticated()) {
            return this.handleAuthState();
        }
        return this.handleNotAuthState();
    }
}