import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const ADDRESS_INVALID = !address || !address.rua || !address.cidade || !address.estado || address.numero === null || address.numero === undefined;

    if(ADDRESS_INVALID){
      return 'Endereço indisponivel ou invalido.'
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }

}
