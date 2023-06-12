import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'
import { ResultService } from '../result.service'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  searchResult: any = new FormGroup({
    rollno: new FormControl(''),
    name: new FormControl(''),

  })

  constructor(private router: Router, private resultService: ResultService) { }


  @ViewChild("rollno")
  rollno!: ElementRef;

  @ViewChild("name")
  name!: ElementRef;


  ngOnInit(): void {

  }

  datacollection: any = []

  FinalResult() {

    var nameValid = RegExp("^[A-Za-zÀ-ÿ ,.'-]+$")

    function isValidRoll(rollno) {
      return isNaN(rollno);
    }


    if ((this.searchResult.value.rollno != "" && !isValidRoll(this.searchResult.value.rollno)) &&
      (this.searchResult.value.name != ""  && nameValid.test(this.searchResult.value.name))) {

      this.resultService.getList().subscribe((resultData) => {

        this.datacollection = resultData;
        let flag = false;
        console.log(this.datacollection)

        for (let i = 0; i < this.datacollection.length; i++) {

          let item = this.datacollection[i];

          if (this.searchResult.value.rollno === item.rollno && this.searchResult.value.name?.toLowerCase() === item.name.toLowerCase()) {
            // console.log(true)
            this.router.navigate(['/showResult/' + item.id]);
            flag = true
            break;
          }
          else {
            flag = false
            // console.log(false)
          }

        }
        if (flag == false) {
          alert("Result not found!!!")
        }
      })
      // console.log("show Result..........")
    }
    else {
      alert("Something Error! Please Check before Submit.")
    }
  }

}
