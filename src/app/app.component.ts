import { Component } from '@angular/core';
import { UsersList } from '../data/users-list';
import { IFilterOptions } from '../interfaces/filter-options.interface';
import { IUser } from '../interfaces/user/user.interface';

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
    this.userListFilter = this.filterUsersList(filterOptions, this.userList);
  }
  filterUsersList(filterOptions: IFilterOptions, userList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, userList);

    return filteredList;
  }
  filterUsersListByName(name: string | undefined, userList: IUser[]): IUser[] {
    const NAME_NOT_TYPED = name === undefined;

    if (NAME_NOT_TYPED) {
      return userList;
    }

    const filteredList = userList.filter((user) =>
      user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );

    return filteredList;
  }
}
