import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  name:string;
  mobile:string;
  rollNo:string;
  fName:string;
  mName:string;
  vechicelNo:string;
  address:string;
  city:string;
  pinCode:string;
  school:string;
  constructor() { 
    this.name='Deepak Kumar';
    this.mobile='+9188888888';
    this.rollNo='1';
    this.fName='Shivji Singh'
    this.mName='Kumkum Devi';
    this.vechicelNo='DL 08S 1234';
    this.address='GTB Nagar';
    this.city='Delhi';
    this.pinCode='110009';
    this.school='DAV';
  }

  ngOnInit() {
  }

}
