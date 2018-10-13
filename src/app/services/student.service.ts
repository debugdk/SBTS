import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:Http) { }
  base_url = 'http://132.148.148.231/SCH/api/';
    student: any;
    getstudent() {
        const headersProfile = new Headers();
        headersProfile.append('Content-Type', 'application/json');
        return this.http.get(this.base_url + 'student', { headers: headersProfile });
    }
    postSchool(school) {
        console.log(school);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const schoolUrl = `${this.base_url}/student/studentpost`;
        return this.http.post(schoolUrl, school, {headers: headers})
          .map(res => res.json());
    }
}
