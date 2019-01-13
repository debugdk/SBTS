import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student/services/student.service';
import { Router } from '@angular/router';



import { Student } from './model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student;

  constructor(private studentServices: StudentService) {

  }

  ngOnInit() {
   this.getStudent(1);
  }

  getStudent(id) {
    this.studentServices.getStudentById(id).subscribe(res => {
      if (res) {
        this.student = res;
        console.log(this.student);
      }
    }, err => {

    });
  }


}
