export interface Poll {
  id?: string;
  heading: string;
  desc: string;
  admins: [];
  resultAccesType: string;
  extendedUsers: [];
  resultAcces: string;
  publishOptions: string;
  verification: boolean;
  publishDate?: string;
  unpublishDate?: string;
  event: string;
  createdBy: string;
  questionSum: number;
}
