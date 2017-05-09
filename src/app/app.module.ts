import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { MarkdownModule } from 'angular2-markdown';
import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde/no-style'

import { AppComponent } from './app.component';
import { CompanyWizardComponent } from './company-wizard/company-wizard.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { WizardStep1Component } from './wizard-step1/wizard-step1.component';
import { WizardStep2Component } from './wizard-step2/wizard-step2.component';
import { SchoolHomeComponent } from './school-home/school-home.component';
import { ViewJobComponent } from './view-job/view-job.component';

const ROUTES = [
  {
    component: CompanyWizardComponent,
    path: 'company/new-post'
  }, {
    component: CompanyHomeComponent,
    path: 'company'
  },
  {
    component: SchoolHomeComponent,
    path: 'school'
  },
  {
    component: ViewJobComponent,
    path: 'view-job/:id'
  },
  {
    path: '**',
    redirectTo: 'company'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CompanyWizardComponent,
    CompanyHomeComponent,
    WizardStep1Component,
    WizardStep2Component,
    SchoolHomeComponent,
    ViewJobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: {
        renderingConfig: {
          codeSyntaxHighlighting: true
        },
        autosave: {
          enabled: true,
          uniqueId: 312
        }
      }
    }),
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
