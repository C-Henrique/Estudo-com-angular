import { NgModule } from '@angular/core';
import { AddressPipe } from './address.pipe';
import { PhonePipe } from './phone.pipe';
import { StatusPipe } from './status.pipe';
import { DatePipe } from '@angular/common';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    AddressPipe,
    StatusPipe,
    DashIfEmptyPipe  ],
  exports: [PhonePipe, AddressPipe, StatusPipe, DashIfEmptyPipe],
})
export class PipesModule {}
