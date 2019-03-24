import { Pipe, PipeTransform } from '@angular/core';
/*
 * Abstracts a given number
 * Usage:
 *   value | abstract
 * Example:
 *   {{ 20000000 | abstract }}
 *   formats to: 20 Million USD
*/
@Pipe({name: 'abstract'})
export class NumberAbstracter implements PipeTransform {
  transform(value: string): string {
    if(value=='0')
        return 'Unknown';
    var len = value.length;
    if(len>12)
        return value.substring(0, len-12) + " Trillion USD";
    else if(len>9)
        return value.substring(0, len-9) + " Billion USD";
    else if(len>6)
        return value.substring(0, len-6) + " Million USD";
    else if(len>3)
        return value.substring(0, len-3) + " Thousand USD";
    else return value + " USD";
  }
}