import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface NotificationsModel {
  title: string;
  body: string;
  link: string;
  timestamp: Timestamp;
}
export interface UserData {
  follow: string[];
  liuID: string;
  name: string;
  newNotifications: boolean;
  role: string;
}
export interface NewNotification {
  newNotifications: boolean;
}
