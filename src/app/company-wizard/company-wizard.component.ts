import { Component, OnInit } from '@angular/core';
import { WizardStepOne } from '../../types/wizard-one.class';

@Component({
  selector: 'app-company-wizard',
  templateUrl: './company-wizard.component.html',
  styleUrls: ['./company-wizard.component.css']
})
export class CompanyWizardComponent implements OnInit {
  step: number = 1;
  progress: number = 0;
  form: Form = new Form();

  constructor() { }

  ngOnInit() { }

  get progressWidth(): string {
    return this.progress + '%';
  }

  setCompanyInfo(e) {
    this.form.company = e;
    this.progress = 25;
    this.step = 2;
  }
}

class Form {
  company: WizardStepOne;
}
