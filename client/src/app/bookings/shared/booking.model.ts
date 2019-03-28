export enum BookingType {
  Car = 'I-bilen',
  Projector = 'Projektor',
  Camera = 'Digitalkamera',
  Speaker = 'Ljudifer',
  CoffeeMachine = 'Kof-I-Annan',
  PhotoWall = 'Fotovägg',
  Rollup = 'Rollup',
}

export interface Booking {
  id?: string;
  ownerId: string;
  type: BookingType;

  date: any;
  dateBlock: number;
  isOrganisation: boolean;
  payed: boolean;

  // Traceability
  modified?: any;
}
