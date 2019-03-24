import { Pipe, PipeTransform } from '@angular/core';
/*
 * Puts in space between different genres and separator
 * Usage:
 *   value | abstract
 * Example:
 *   {{ "Adventure|Mystery" | abstract }}
 *   formats to: "Adventure | Mystery"
*/
@Pipe({ name: 'space' })
export class Spacer implements PipeTransform {
    transform(value: string): string {
        if (value == '')
            return '';
        var len = value.length;
        var i=0;
        var formattedString = value[0];
        for(i = 1; i < len ; i++) {
            if(value[i] == '|')
                formattedString += " | ";
            else formattedString += value[i];
        }
        return formattedString;
    }
}