import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'addPrefix'
})
export class AddPrefixPipe implements PipeTransform {

    transform(value: number, args?: any): string {
        if (value > 0) {
            return '+' + value;
        }
        return '' + value;
    }

}
