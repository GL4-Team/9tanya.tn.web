import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterWithCommas'
})
export class CharacterWithCommasPipe implements PipeTransform {

  transform(array: any[]): string {
    if (array) {
      return array.map((item: any) => item.name).join(', ');
    }
    return '';
  }

}



