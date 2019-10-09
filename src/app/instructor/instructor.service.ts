import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InstructorService {
    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<any> {
        return this.http.get('api/v1/getallproducts');
    }
    getInstructorCourse(): Observable<any> {
        return this.http.get('api/v1/instructorcourses');
    }

    getCategories(): Observable<any> {
        return this.http.get('api/v1/categories');
    }

    createCourse(data): Observable<any> {
        return this.http.post('api/v1/createproduct', data);
    }

    getProductById(id):Observable<any>{
        return this.http.get(`api/v1/product/${id}`);
    }
}