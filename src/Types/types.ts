export interface IStatus {
  availableProducts: number;
  nonAvailableProducts: number;
  today: string;
  totalProducts: number;
}

export interface ICompany {
  name: string;
  status: IStatus;
}

export interface ICity {
  code: string;
  name: string;
}
