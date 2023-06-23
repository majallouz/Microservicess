import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidateComponent} from './candidate/candidate.component';
import {EvaluationComponent} from "./evaluation/evaluation.component";
import {AddEvalComponent} from "./evaluation/components/add-eval/add-eval.component";
import {EditEvalComponent} from "./evaluation/components/edit-eval/edit-eval.component";
import {ListEvalComponent} from "./evaluation/components/list-eval/list-eval.component";
import {AddCandidaturesComponent} from "./candidatures/add-candidatures/add-candidatures.component";
import {EditCandidaturesComponent} from "./candidatures/edit-candidatures/edit-candidatures.component";
import {ListCandidaturesComponent} from "./candidatures/list-candidatures/list-candidatures.component";
import { EmployeeComponent } from './employee/employee.component';
import { AddEmpComponent } from './employee/components/add-emp/add-emp.component';
import { EditEmpComponent } from './employee/components/edit-emp/edit-emp.component';
import { ListEmpComponent } from './employee/components/list-emp/list-emp.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddOfferComponent } from './offer/components/add-offer/add-offer.component';
import { EditOfferComponent } from './offer/components/edit-offer/edit-offer.component';
import { ListOfferComponent } from './offer/components/list-offer/list-offer.component';


const routes: Routes = [
  { path: 'candidat', component: CandidateComponent },
  { path: 'eval/addEval', component: AddEvalComponent },
  { path: 'eval/editEval', component: EditEvalComponent },
  { path: 'eval/listEval', component: ListEvalComponent },
  { path: 'candidatures/addCandidature', component: AddCandidaturesComponent },
  { path: 'candidatures/editCandidature', component: EditCandidaturesComponent },
  { path: 'candidatures/listCandidatures', component: ListCandidaturesComponent },
  {path: 'emp/addEmp',component: AddEmpComponent},
  {path: 'emp/editEmp',component: EditEmpComponent},
  {path: 'emp/listEmp',component: ListEmpComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'offer/addOffer',component: AddOfferComponent},
  {path: 'offer/editOffer',component: EditOfferComponent},
  {path: 'offer/listOffer',component: ListOfferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
