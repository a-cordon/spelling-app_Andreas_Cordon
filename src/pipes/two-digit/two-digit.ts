import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigit',
})
export class TwoDigitPipe implements PipeTransform {
  transform(value: string, ...args) {
    return this.pad(value, 2, 0);
  }

  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
}
