interface IFilterStatus {
    description: string;
    value : boolean
}
export interface IFilterOptions {
    name : string |  undefined;
    startDate: Date | undefined;
    endDate: Date | undefined;
    status: IFilterStatus[];
}