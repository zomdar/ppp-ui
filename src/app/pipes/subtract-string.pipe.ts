import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loanEstimate'
})
export class SubtractStringPipe implements PipeTransform {

  transform(loanAmount: string): string {
    return loanAmount.substring(2);
  }

}
