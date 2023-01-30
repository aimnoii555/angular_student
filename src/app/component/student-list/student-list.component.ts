import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student.model';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  Student!: Student[]

  constructor(private studentService: StudentService){}

  ngOnInit(): void {
      this.studentService.getStudentList().subscribe(res=>{
        this.Student = res.map(e=>{
          return {
            id : e.payload.doc.id,
            ...e.payload.doc.data() as {}
          } as Student;
        })
      })
  }

  removeStudent(student: Student) {
    if (confirm('Are you sure to delete'+ Student.name)) {
      this.studentService.deleteStudent(student)
    }
  }
}
