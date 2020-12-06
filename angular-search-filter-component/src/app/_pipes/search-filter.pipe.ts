import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: [{name: string, occupation: string}], searchText: string): any {
    searchText = searchText.toLocaleLowerCase();
    items = items.filter(item =>
      item.name.toLocaleLowerCase().includes(searchText)
      || item.occupation.toLocaleLowerCase().includes(searchText)
    );
    if (items.length === 0)
      items.push({
        name: 'No result found',
        occupation: ''
      })
    return items;
  }
}
