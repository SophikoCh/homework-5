import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  [x: string]: any;

  secondStepForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.secondStepForm = this.fb.group({
      number: '',
      address:'',
      residence: '',
    })
  }
get number() {
  return this.secondStepForm.get('number');
}
get address() {
  return this.secondStepForm.get('address');
}
get residence() {
  return this.secondStepForm.get('residence');
}
  items = [
    { id: 1, name: '+995 123 456 555 ' },
    { id: 2, name: '+910 123 456 555 321' },
    { id: 3, name: '+234 123 456 321 654' },
  ]

  country = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys' },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ]

  ngOnInit(): void {
  }

  onSave(){
    console.log(this.secondStepForm.value);
  }

}
