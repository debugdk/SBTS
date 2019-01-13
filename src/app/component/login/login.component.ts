import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school.service';
import { LoginService } from './services/login.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  schools = {};
  constructor(private loginService: LoginService) { }
  // constructor(private schoolService : SchoolService ) {
  // }

  ngOnInit() {
    this.getSchool();
  }


  getSchool() {
    this.loginService.getAllSchool().subscribe(res => {
      if (res) {
        this.schools = res;
        console.log(this.schools);
      }
    },
      err => {
        //this.toastrService.error(err.error.message, 'Error');
      });
  }
  // GetLogin()
  // {
  //   var schoolvalue = this.schoolService.getSchool()
  //   console.log(schoolvalue);
  // }

}
