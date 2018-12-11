export enum Gender {
  Man = "Man",
  Woman = "Kvinna",
  Other = "Annat/icke-binär",
  Unspecified = "Vill ej ange"
}

export enum Role {
  Admin = "Admin",
  Editor = "Editor",
  Student = "Student"
}

export enum Class {
  A = "a-klassen",
  B = "b-klassen",
  C = "c-klassen",
  D = "d-klassen",
  E = "e-klassen",
  F = "f-klassen",
  IA = "ia-klassen",
  IB = "ib-klassen"
}

export interface User {
  id?: string;

  // Core
  liu_id: string;
  active: boolean;
  first_name: string;
  last_name: string;
  gender: Gender;
  role: Role;
  gdpr_accepted: string; // DATE/TIME
  must_edit: boolean;
  current_year: string;
  start_year: string;

  // Education
  class: Class;
  bachelor_profile: string; // ID
  master_profile: string; // ID

  // Voluntary fields
  phone?: string;
  rfid?: string;
  allergies?: string;
  newspaper?: boolean;

  // Address
  address?: string;
  zip_code?: string;
  city?: string;

  // Member of organisation
  organisation?: string;
  organisation_role?: string;
  organisation_contact?: string;

  // Traceability
  created: string; // DATE/TIME
  modified: string; // DATE/TIME + USER
}
