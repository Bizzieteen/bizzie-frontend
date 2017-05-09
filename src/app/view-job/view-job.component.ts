import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {
  item = {
    company: {
      name: 'Test',
      contact_name: 'Test',
      contact_phone: 'Test',
      contact_email: 'Test',
      website: 'Test',
      logo: 'https://www.logogarden.com/wp-content/uploads/lg-index/Example-Logo-6.jpg'
    },
    task: {
      description: `
      ## Test
      -------
      This is the test descrption of the task.
      `,
      title: 'Test',
      type: 'Test'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
