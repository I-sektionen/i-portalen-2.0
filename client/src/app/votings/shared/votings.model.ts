
export interface Voting {
  id?: string;
  heading: string;
  desc: string;
  admins: [];
  resultAccesType: string;
  extendedUsers: [];
  resultAcces: string;
  publishOptions: string;
  verification: boolean;
  anonymous: boolean;
  usePublishDate: boolean;
  publishDate?: string;
  unpublishDate?: string;
  eventType: string;
  createdBy: string;
}
