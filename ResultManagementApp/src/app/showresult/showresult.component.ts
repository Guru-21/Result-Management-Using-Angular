import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResultService } from '../result.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-showresult',
  templateUrl: './showresult.component.html',
  styleUrls: ['./showresult.component.css']
})
export class ShowresultComponent implements OnInit {

  showResult = new FormGroup({
    rollno: new FormControl(''),
    name: new FormControl(''),
    dob: new FormControl(''),
    score: new FormControl('')
  })


  constructor(private router:Router, private acrouter:ActivatedRoute, private resultService:ResultService) { }

  ngOnInit(): void {
    this.resultService.currentResult(this.acrouter.snapshot.params['id']).subscribe((result)=>{
      
      this.showResult = new FormGroup({
        rollno: new FormControl(result['rollno']),
        name: new FormControl(result['name']),
        dob: new FormControl(result['dob']),
        score: new FormControl(result['score'])
      })

      console.log(result);
    })

  }

}
