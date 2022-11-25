import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../env';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string): Observable<any> {
    let url: string = `${API_URL}/login?username=${username}&password=${password}`
    return this.http.get<any>(url);
  }
}
