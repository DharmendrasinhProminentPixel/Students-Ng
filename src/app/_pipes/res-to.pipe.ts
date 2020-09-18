import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'resTo' })
export class ResToPipe implements PipeTransform {

  transform(value: number, resToVal: number): number {
    let val = value;
    for(let i=1; i<resToVal; i++)
      val *= value;
    return val ;
  }

}
