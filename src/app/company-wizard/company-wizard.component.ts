import { Component, OnInit } from '@angular/core';
import { WizardStepOne } from '../../types/wizard-one.class';

@Component({
  selector: 'app-company-wizard',
  templateUrl: './company-wizard.component.html',
  styleUrls: ['./company-wizard.component.css']
})
export class CompanyWizardComponent implements OnInit {

  progress: number = 0;
  form: Form;

  constructor() { }

  ngOnInit() {
  }

  get progressWidth(): string {
    return this.progress + '%';
  }

  setCompanyInfo(e) {
    this.form.company = e;
    this.progress = 25;
  }
}

class Form {
  company: WizardStepOne;
}
