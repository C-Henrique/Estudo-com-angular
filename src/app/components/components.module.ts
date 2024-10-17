import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [AngularMaterialModule, FormsModule],
  declarations: [UserDetailsComponent, FilterComponent],
  exports: [UserDetailsComponent, FilterComponent],
})
export class ComponentsModule {}
