import { Component } from '@angular/core';
import { UsersList } from '../data/users-list';
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

  constructor() {
    setTimeout(() => {
      this.userList = UsersList;
    }, 3000);
  }
  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showDetails = true;
  }
}
