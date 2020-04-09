export enum Gender {
  Man = 'Man',
  Woman = 'Kvinna',
  Other = 'Annat/Icke-binär',
  Unspecified = 'Vill ej ange'
}

export enum Role {
  Admin = 'Admin',
  Editor = 'Editor',
  Student = 'Student'
}

export enum Class {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  IiA = 'IiA',
  IiB = 'IiB'
}

export interface User {
  id?: string;

  // Core
  liuId: string;
  active: boolean;
  firstName: string;
  lastName: string;
  gender: Gender;
  role: Role;
  gdprAccepted: string; // DATE/TIME
  mustEdit: boolean;
  currentYear: string;
  startYear: string;

  // Education
  class: Class;
  bachelorProfile: string; // ID
  masterProfile: string; // ID

  // Voluntary fields
  phone?: string;
  rfid?: string;
  allergies?: string;
  newspaper?: boolean;

  // Address
  address?: string;
  zipCode?: string;
  city?: string;

  // Member of organisation
  organisation?: string;
  organisationRole?: string;
  organisationContact?: string;

  // Traceability
  created: string; // DATE/TIME
  modified: string; // DATE/TIME + USER

}


