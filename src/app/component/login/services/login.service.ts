import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpService: HttpService
  ) { }

  getAllMasters(): Observable<any> {
    return this.httpService.getApi('/master')
      .pipe(
        tap(res => {
          if (res) {
            return res;
          }

        })
      );
  }
  getMastersListById(id): Observable<any> {
    return this.httpService.getApi(`/master/${id}`)
      .pipe(
        tap(res => {
          if (res) {
            return res;
          }

        })
      );
  }
  delete(id) {
    return this.httpService.deleteApi(`/master/${id}`).pipe(
      tap(res => {
        if (res) {
          return res;
        }

      })
    );
  }
  addMaster(MasterData): Observable<any[]> {
    return this.httpService.postApi('/master', MasterData, '')
      .pipe(
        tap(res => {
          if (res) {
            return res;
          }

        })
      );
  }
  updateMaster(masterData): Observable<any[]> {
    return this.httpService.putApi(`/master`, masterData, '')
      .pipe(
        tap(res => {
          if (res) {
            return res;
          }
        })
      );
  }
  getGeneralMasterByType(type): Observable<any> {
    return this.httpService.getApi(`/master/General/${type}`)
      .pipe(
        tap(res => {
          if (res) {
            return res;
          }

        })
      );
  }
  getAllSchool(): Observable<any> {
    return this.httpService.getApi('school')
      .pipe(
        tap(res => {
          if (res) {
            return res;
          }

        })
      );
  }
}
