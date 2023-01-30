import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit{

  public studentForm: FormGroup;

  constructor(
    public studentService: StudentService,
    public formBuilder: FormBuilder,
    public router: Router
  ){
    this.studentForm = this.formBuilder.group(
      {
        name: [''],
        email: [''],
        student_course: [''],
        fees: ['']
      }
    )
  }

  ngOnInit(): void {
      
  }

  onSubmit() {
    this.studentService.createStudent(this.studentForm.value);
    this.router.navigate(['list-student'])
  }
}
