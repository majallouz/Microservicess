import { ListCandidaturesComponent } from './candidatures/list-candidatures/list-candidatures.component';
import { EditCandidaturesComponent } from './candidatures/edit-candidatures/edit-candidatures.component';
import { AddCandidaturesComponent } from './candidatures/add-candidatures/add-candidatures.component';
import { ListOfferComponent } from './offer/components/list-offer/list-offer.component';
import { EditOfferComponent } from './offer/components/edit-offer/edit-offer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ListComponent } from './candidate/components/list/list.component';
import { AddComponent } from './candidate/components/add/add.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AddEvalComponent } from './evaluation/components/add-eval/add-eval.component';
import { EditEvalComponent } from './evaluation/components/edit-eval/edit-eval.component';
import { ListEvalComponent } from './evaluation/components/list-eval/list-eval.component';
import { OfferComponent } from './offer/offer.component';
import { AddOfferComponent } from './offer/components/add-offer/add-offer.component';
import { AddEmpComponent } from './employee/components/add-emp/add-emp.component';
import { EditEmpComponent } from './employee/components/edit-emp/edit-emp.component';
import { ListEmpComponent } from './employee/components/list-emp/list-emp.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    ListComponent,
    AddComponent,
    EvaluationComponent,
    AddEvalComponent,
    EditEvalComponent,
    ListEvalComponent,
    OfferComponent,
    AddOfferComponent,
    EditOfferComponent,
    ListOfferComponent,
    AddEmpComponent,
    EditEmpComponent,
    ListEmpComponent,
    CandidaturesComponent,
    AddCandidaturesComponent,
    EditCandidaturesComponent,
	  EmployeeComponent,
    AddEmpComponent,
    EditEmpComponent,
    ListEmpComponent,
    LoginComponent,
    RegisterComponent,
    ListCandidaturesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : LocationStrategy ,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
