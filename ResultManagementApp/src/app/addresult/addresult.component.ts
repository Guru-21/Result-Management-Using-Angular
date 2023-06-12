import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ResultService } from '../result.service'
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-addresult',
  templateUrl: './addresult.component.html',
  styleUrls: ['./addresult.component.css']
})
export class AddresultComponent implements OnInit {

  addResultData: any = new FormGroup({
    rollno: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    score: new FormControl('', Validators.required)
  })


  constructor(private router: Router, private result: ResultService) { }


  ngOnInit(): void {
  }

  collectResult() {

    var nameValid = RegExp("^[A-Za-zÀ-ÿ ,.'-]+$")

    //Date Validate
    function isValidDate(date) {
      var temp = date.split('/');
      var d = new Date(temp[1] + '/' + temp[0] + '/' + temp[2]);
      console.log(d)
      return (d && (d.getMonth() + 1) == temp[1] && d.getDate() == Number(temp[0]) &&
        (d.getFullYear() == Number(temp[2]) && (Number(temp[2]) >= 1900 && Number(temp[2]) < 2100)));

    }

    function isValidRoll(rollno) {
      if (parseInt(rollno) > 0 && parseInt(rollno) < 100000) {

        return isNaN(rollno);
      }
      else {
        return true;
      }
    }

    function isValidScore(score: any) {
      if (parseInt(score) > 0 && parseInt(score) < 1000) {

        return isNaN(score);
      }
      else {
        return true;
      }
    }

    if ((this.addResultData.value.rollno != "" && !isValidRoll(this.addResultData.value.rollno)) &&
      (this.addResultData.value.name != "" && nameValid.test(this.addResultData.value.name)) &&
      (this.addResultData.value.score != "" && !isValidScore(this.addResultData.value.score)) &&
      (this.addResultData.value.dob != "" && isValidDate(this.addResultData.value.dob))) {

      this.result.saveResult(this.addResultData.value).subscribe((resultData) => {
        console.log("Result add....", resultData);
      })

      alert("Result added Successfully!!");
      this.router.navigate(['/manageResult']);
    }
    else {
      alert("Something Error! Please Check before Submit.")
    }
  }

}
