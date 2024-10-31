import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterUsersListByName = (name: string | undefined, userList: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = name === undefined;

    if (NAME_NOT_TYPED) {
      return userList;
    }

    const filteredList = userList.filter((user) =>
      user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );

    return filteredList;
  }
  const  filterUsersListByStatus = (
    status: boolean | undefined,
    filteredList: IUser[]
  ): IUser[] => {
    const STATUS_NOT_TYPED = status === undefined;

    if (STATUS_NOT_TYPED) {
      return filteredList;
    }

    const filteredListStatus = filteredList.filter(
      (user) => user.ativo === status
    );

    return filteredListStatus;
  }

  const   filterUsersListByDate= (startDate: Date | undefined, endDate: Date | undefined, userList: IUser[]): IUser[] => {
    const DATE_NOT_TYPED = startDate === undefined || endDate === undefined

    if(DATE_NOT_TYPED){
      return userList;
    }

    const filteredList = userList.filter(user => isWithinInterval(new Date(user.dataCadastro),{
      start: startDate,
      end: endDate
    }))

    return filteredList;

  }
 export const filterUsersList = (filterOptions: IFilterOptions, userList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, userList);
    filteredList = filterUsersListByStatus(filterOptions.status,filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList)

    return filteredList;
  }