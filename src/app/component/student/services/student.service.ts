import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { map, catchError, tap } from 'rxjs/operators';
import {Student } from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpService: HttpService
  ) { }

  getAllStudent(): Observable<Student> {
    return this.httpService.getApi('/student')
      .pipe(
        tap(res => {
          if (res) {
            return res;
          }
        })
      );
  }
  getStudentById(id): Observable<Student> {
    return this.httpService.getApi(`/student/${id}`)
      .pipe(
        tap(res => {
          if (res) {
            return res;
          }
        })
      );
  }
}

