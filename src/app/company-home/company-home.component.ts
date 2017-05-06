import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {

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
