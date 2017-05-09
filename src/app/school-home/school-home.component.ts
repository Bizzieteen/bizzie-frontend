import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-home',
  templateUrl: './school-home.component.html',
  styleUrls: ['./school-home.component.scss']
})
export class SchoolHomeComponent implements OnInit {

  jobs = [{
    name: 'Test 1',
    pickedup: false
  }, {
    name: 'Test 2',
    pickedup: true
  }]

  constructor() { }

  ngOnInit() { }

}
