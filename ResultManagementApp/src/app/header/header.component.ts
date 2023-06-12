import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: any;
  isButtonShown!: boolean;


  constructor(location: Location, router: Router) {
    this.isButtonShown = false;

    router.events.subscribe(val => {

      if (location.path() != "") {
        this.isButtonShown = true
      }
      else {
        this.isButtonShown = false
      }
    });
  }

  ngOnInit(): void {

  }

}
