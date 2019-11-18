import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum'
})
export class EnumPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const keys = Object.keys(value);
    const values = Object.values(value);
    return keys.map((key, i) => {
      return {'key': key, 'value': values[i]};
    });
  }

}
