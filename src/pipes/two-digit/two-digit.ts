import { Pipe, PipeTransform } from '@angular/core';

/**
 * A class for the two-digit pipe
 * @author Andreas Cordon
 * @version 0.1
 */

@Pipe({
  name: 'twoDigit',
})
export class TwoDigitPipe implements PipeTransform {
  transform(value: string, ...args) {
    return this.pad(value, 2, 0);
  }

  pad(value, width, z) {
    z = z || '0';

    // casting value to a string
    value = value + '';

    return value.length >= width ? value : new Array(width - value.length + 1).join(z) + value;
  }
}
