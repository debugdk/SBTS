import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../services/school.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private schoolService : SchoolService ) {
  }

  ngOnInit() {
  }

  GetLogin()
  {
    var schoolvalue = this.schoolService.getSchool()
    console.log(schoolvalue);
  }

}
