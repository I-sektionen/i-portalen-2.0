import { Organisation } from '../../organisations/shared/organisation.model';

export interface Post {
  id?: string;

  //Gathered from the attributes component
  //General Attributes
  title: string;
  ingress: string;
  isEvent: boolean;
  choosenCategories: any[];
  availableCategories: any[];
  publishTime: Date;
  unpublishTime: Date;
  author: Organisation[];
  imgURLs: string[];
  imgNames: string[];

  //Attributes belonging to even
  location: string;
  eventStartTime: Date;
  eventFinishTime: Date;
  lastRegisterDate: Date;
  lastUnregisterDate: Date;
  extraRegisterDeadline: Date;
  extraRegisterReason: string;

  //Gathered from the create-post component
  text: string;
}
