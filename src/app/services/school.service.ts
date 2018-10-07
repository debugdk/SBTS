import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SchoolService {
    constructor(private http: Http) {
    }
    base_url = 'http://132.148.148.231/SCH/api/';
    school : any;
    getSchool() {
        const headersProfile = new Headers();
        headersProfile.append('Content-Type', 'application/json');
        return this.http.get(this.base_url + 'School', { headers: headersProfile });
    }
    postSchool(school) {
        console.log(school);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const schoolUrl = `${this.base_url}/school/shcoolpost`;
        return this.http.post(schoolUrl, school, {headers: headers})
          .map(res => res.json());
    }
}
