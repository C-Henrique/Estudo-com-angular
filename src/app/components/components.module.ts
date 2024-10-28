import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListExpanseComponent } from './users-list-expanse/users-list-expanse.component';
import { PipesModule } from '../pipes/pipes.module';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [AngularMaterialModule, FormsModule, PipesModule, DatePipe],
  declarations: [UserDetailsComponent, FilterComponent, UsersListComponent, UsersListExpanseComponent],
  exports: [UserDetailsComponent, FilterComponent, UsersListComponent,UsersListExpanseComponent],
})
export class ComponentsModule {}
