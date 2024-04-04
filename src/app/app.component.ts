import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-5';

  items = [
    { id: 1, name: '+995 123 456 555 ' },
    { id: 2, name: '+910 123 456 555 321' },
    { id: 3, name: '+234 123 456 321 654' },
  ];

  country = [
      {id: 1, name: 'Vilnius'},
      {id: 2, name: 'Kaunas'},
      {id: 3, name: 'Pavilnys'},
      {id: 4, name: 'Pabradė'},
      {id: 5, name: 'Klaipėda'}
  ];

}

