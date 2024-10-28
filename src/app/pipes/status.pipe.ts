import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(status: boolean): string {
    const STATUS_INVALID = status === undefined || status === null;

    if (STATUS_INVALID) {
      return 'Status indisponivel ou invalido.';
    }

    return status ? 'Ativo' : 'Inativo';
  }
}
