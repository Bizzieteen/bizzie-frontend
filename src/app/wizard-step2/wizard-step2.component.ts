import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wizard-step2',
  templateUrl: './wizard-step2.component.html',
  styleUrls: ['./wizard-step2.component.scss']
})
export class WizardStep2Component implements OnInit {

  @Output('onSubmit') public onSubmit: EventEmitter<any> = new EventEmitter();
  model = {
    description: '*Briefly describe your task...*',
    type: 'Blog',
    title: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
