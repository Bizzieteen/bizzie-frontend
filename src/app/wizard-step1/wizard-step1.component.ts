import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WizardStepOne } from '../../types/wizard-one.class';

@Component({
  selector: 'app-wizard-step1',
  templateUrl: './wizard-step1.component.html',
  styleUrls: ['./wizard-step1.component.css']
})
export class WizardStep1Component implements OnInit {
  form: WizardStepOne = new WizardStepOne();

  @ViewChild('wizard') wizard: NgForm;

  @Output('onSubmit') onSubmit: EventEmitter<WizardStepOne> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveFileData(e: any) {
    // Upload file
    this.form.logo = e.srcElement.files[0];
    console.log(e.srcElement.files);
  }

}

