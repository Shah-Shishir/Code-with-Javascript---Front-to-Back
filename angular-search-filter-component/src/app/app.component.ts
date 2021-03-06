import { Component } from '@angular/core';

import { Hero } from './_models/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText: string = '';
  heroes: Hero[] = [
    {
      name: 'Dr. Nice',
      occupation: 'Doctor'
    },
    {
      name: 'RubberMan',
      occupation: 'Typist'
    },
    {
      name: 'Narco',
      occupation: 'Chef'
    },
    {
      name: 'Bombasto',
      occupation: 'Dancer'
    },
    {
      name: 'Celeritas',
      occupation: 'Fashion Designer'
    },
    {
      name: 'Magneta',
      occupation: 'Teacher'
    },
    {
      name: 'Dynama',
      occupation: 'Scientist'
    },
    {
      name: 'Dr. IQ',
      occupation: 'Mathematician'
    },
    {
      name: 'Magma',
      occupation: 'Geologist'
    },
    {
      name: 'Tornado',
      occupation: 'Wrestler'
    }
  ];
}
