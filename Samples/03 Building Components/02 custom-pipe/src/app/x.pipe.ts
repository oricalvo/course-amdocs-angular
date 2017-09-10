import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'x'
})
export class XPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "X" + (value || "") + "X";
  }
}
