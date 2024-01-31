import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigits'
})
export class TwoDigitsPipe implements PipeTransform {

  transform(value: number): string {
    if (value || value === 0) {
      return value.toFixed(2);
    }
    return '';
  }

}
