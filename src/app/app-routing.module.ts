import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { EditStudentComponent } from './component/edit-student/edit-student.component';
import { StudentListComponent } from './component/student-list/student-list.component';


const routes: Routes = [
  {
    path: 'add-student',
    component: StudentCreateComponent
  },
  {
    path: 'edit-student/:id',
    component: EditStudentComponent
  },
  {
    path: 'list-student',
    component: StudentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
