export interface Pollq {
  id?: string;
  question: string;
  desc: string;
  anonymous: boolean;
  poll: string;
  createdBy: string;
  status: boolean;
  resultAccesType: string;
  extendedUsers: [];
  resultAcces: string;
}
