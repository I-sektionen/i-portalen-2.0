import { Organisation } from '../../organisations/shared/organisation.model';
import {Type} from '@angular/core';
import FieldValue = firebase.firestore.FieldValue;
import * as firebase from 'firebase';

export interface Post {
  id: string;
  type: string;
  title: string;
  ingress: string;
  owner: string;
  choosenCategories: any[];
  availableCategories: any[];
  publishTime: Date;
  unpublishTime: Date;
  author: Organisation[];
  imgURLs: string[];
  imgNames: string[];
  text: string;
  lastChanged: Date | FieldValue;
  created: Date | FieldValue;

}

export interface Article extends Post {
}
export interface Event extends Post {
  location: string;
  eventStartTime: Date;
  eventFinishTime: Date;
  lastRegisterDate: Date;
  lastUnregisterDate: Date;
  extraRegisterDeadline: Date;
  extraRegisterReason: string;
}

export interface ExJob extends Post {

}
