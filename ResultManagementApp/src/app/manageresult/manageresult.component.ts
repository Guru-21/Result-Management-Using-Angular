import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../result.service'

@Component({
  selector: 'app-manageresult',
  templateUrl: './manageresult.component.html',
  styleUrls: ['./manageresult.component.css']
})
export class ManageresultComponent implements OnInit {

  constructor(private router: Router, private result: ResultService) { }

  collection: any = [];
  ngOnInit(): void {
    this.result.getList().subscribe((finalResult) => {
      console.log(finalResult);
      this.collection = finalResult;
    })
  }

  onClickAddResult() {
    this.router.navigate(['/addResult'])
  }

  deleteResult(dataID: any) {
    console.log("delete button called...", dataID)

    let index = this.collection.findIndex((x: { id: any; }) => x.id === dataID)
    this.collection.splice(index, 1)
    
    this.result.deleteResult(dataID).subscribe((finalRes) => {
      console.log(finalRes);
    })
  }
}
