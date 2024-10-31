import { Component } from '@angular/core';
import { UsersList } from '../data/users-list';
import { IFilterOptions } from '../interfaces/filter-options.interface';
import { IUser } from '../interfaces/user/user.interface';
import { filterUsersList } from '../utils/filter-user-lits';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userSelected: IUser = {} as IUser;
  showDetails: boolean = false;

  userList: IUser[] = [];
  userListFilter: IUser[] = [];

  constructor() {
    setTimeout(() => {
      this.userList = UsersList;
      this.userListFilter = this.userList;
    }, 1);
  }
  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showDetails = true;
  }
  onFilter(filterOptions: IFilterOptions) {
    this.userListFilter = filterUsersList(filterOptions, this.userList);
  }
}
