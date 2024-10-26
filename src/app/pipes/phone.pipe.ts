import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    const INVALID_PHONE = !phone || phone.length < 10 || phone.length > 11;
    
    const CELL_PHONE = phone.length === 11;

    if(INVALID_PHONE){
      return '-';
    }
    if(CELL_PHONE){
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
    }else{
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
    }

  }

}
