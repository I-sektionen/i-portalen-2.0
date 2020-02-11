import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface NotificationsModel {
  title: string;
  body: string;
  link: string;
  timestamp: Timestamp;
}
