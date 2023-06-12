import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from '../result.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})
export class UpdateResultComponent implements OnInit {

  editResultData: any = new FormGroup({
    rollno: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    score: new FormControl('', Validators.required)
  })


  constructor(private acrouter: ActivatedRoute, private result: ResultService, private router: Router) { }


  ngOnInit(): void {
    console.log(this.acrouter.snapshot.params['id'])
    this.result.currentResult(this.acrouter.snapshot.params['id']).subscribe((finalResult) => {
      console.log(finalResult)

      this.editResultData = new FormGroup({
        rollno: new FormControl(finalResult['rollno']),
        name: new FormControl(finalResult['name']),
        dob: new FormControl(finalResult['dob']),
        score: new FormControl(finalResult['score'])
      })

    })
  }

  updateResultData() {

    var nameValid = RegExp("^[A-Za-zÀ-ÿ ,.'-]+$")

    //Date Validate
    function isValidDate(date) {
      var temp = date.split('/');
      var d = new Date(temp[1] + '/' + temp[0] + '/' + temp[2]);
      console.log(d)
      return (d && (d.getMonth() + 1) == temp[1] && d.getDate() == Number(temp[0]) &&
        (d.getFullYear() == Number(temp[2]) && (Number(temp[2]) >= 1900 && Number(temp[2]) < 2100)));

    }

    function isValidRoll(rollno:any) {
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

    // console.log("updated data....", this.editResultData.value);


    if ((this.editResultData.value.rollno != "" && !isValidRoll(this.editResultData.value.rollno)) &&
      (this.editResultData.value.name != "" && nameValid.test(this.editResultData.value.name)) &&
      (this.editResultData.value.score != "" && !isValidScore(this.editResultData.value.score)) &&
      (this.editResultData.value.dob != "" && isValidDate(this.editResultData.value.dob))) {

      this.result.updateResult(this.acrouter.snapshot.params['id'], this.editResultData.value).subscribe((finalUpdatedResult) => {
        console.log("final updated result.........", finalUpdatedResult);
      })

      alert("Result Updated Successfully!!");
      this.router.navigate(['/manageResult'])
    }
    else {
      alert("Something Error! Please Check before Submit.")
    }

  }

}
