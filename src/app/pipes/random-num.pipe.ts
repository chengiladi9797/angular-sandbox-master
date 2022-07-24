import { Pipe, PipeTransform } from '@angular/core';
import { max } from 'rxjs';

@Pipe({
  name: 'randomNum'
})
export class RandomNumPipe implements PipeTransform {

  transform(value: Number, ...args: Number[]): Number {
    
    if(!args)

  }

}
