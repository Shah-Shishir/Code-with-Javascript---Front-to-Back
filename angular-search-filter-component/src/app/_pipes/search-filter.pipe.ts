import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from "../_models/hero.model";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(heroes: Hero[], searchText: string): any[] {
    searchText = searchText.toLocaleLowerCase();
    heroes = heroes.filter(hero =>
      hero.name.toLocaleLowerCase().includes(searchText)
      || hero.occupation.toLocaleLowerCase().includes(searchText)
    );
    if (!heroes.length) {
      heroes.push({ name: 'No result found', occupation: ''})
    }
    return heroes;
  }
}
