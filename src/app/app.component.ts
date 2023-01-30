import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student';

  constructor(private router: Router){}

  addStudent() {
    let link = ['add-student']
    this.router.navigate(link)
  }

  listStudent() {
    let link = ['list-student']
    this.router.navigate(link)
  }
}
