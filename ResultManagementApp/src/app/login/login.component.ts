import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickStudent() {
    this.router.navigate(['/searchResult']);
    console.log('student function called.......')
  }


  onClickTeacher(){
    this.router.navigate(['/manageResult']);
    console.log('teacher function called.......')
  }

}

