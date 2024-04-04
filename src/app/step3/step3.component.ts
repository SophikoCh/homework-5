import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  wholeMergetData: any;
  route: any;

  constructor(private fb: FormBuilder) {
    this.thirdStepForm = this.fb.group({
      verification: '',
    })
  }
  items = [
    { id: 1, name: '+995 123 456 555 ' },
    { id: 2, name: '+910 123 456 555 321' },
    { id: 3, name: '+234 123 456 321 654' },
  ]

  thirdStepForm: FormGroup;
  
  get verification() {
    return this.thirdStepForm.get('verification');
  }

  ngOnInit(): void { }
  onFinal() {
    console.log(this.thirdStepForm.value);
  }

  
}
