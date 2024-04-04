import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    JoinUsComponent,
    RegistrationComponent,
    Step2Component,
    Step3Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
