import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinUsComponent } from './join-us/join-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'joinUs',
    pathMatch: 'full',
    
  },
  {
    path: 'joinUs',
    component: JoinUsComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'step2',
    component: Step2Component,
  },

  {
    path: 'step3',
    component: Step3Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
