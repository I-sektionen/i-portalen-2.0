import { Organisation } from '../../organisations/shared/organisation.model';

export interface Post {
  id?: string;

  //Gathered from the attributes component
  title: string;
  ingress: string;
  isEvent: boolean;
  choosenCategories: any[];
  availableCategories: any[];
  publishTime: Date;
  unpublishTime: Date;
  author: Organisation[];
  imgURLs: string[];

  //Gathered from the create-post component
  text: string;
}
