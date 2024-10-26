import { Component } from '@angular/core';
import { UsersList } from '../../../data/users-list';
import { IUser } from '../../../interfaces/user/user.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-users-list-expanse',
  templateUrl: './users-list-expanse.component.html',
  styleUrl: './users-list-expanse.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsersListExpanseComponent {
  usersList: IUser[] = UsersList;
  displayedColumns: string[] = ['nome', 'dataCadastro', 'ativo'];
  expandedElement: IUser[] = [];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

}
