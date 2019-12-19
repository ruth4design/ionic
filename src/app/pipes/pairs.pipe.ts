import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pairs'
})
export class PairsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
