import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceToN'
})
export class ReduceToNPipe implements PipeTransform {

  transform(value: string, start?:number,limit?:number): string {
    if(!start) start=0
    if(!limit) length=10
    return value.substring(start,limit);
  }

}
