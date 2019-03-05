import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffle'
})
export class ShufflePipe implements PipeTransform {

  private static randomize(a, b) {
    return Math.random() > .5 ? -1 : 1;
  }

  transform(value: any[]): any[] {
    if (!value) { return null; }
    return value.sort(ShufflePipe.randomize);
  }

}
