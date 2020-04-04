import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import {addNotificationToFollow} from "./notifications";
//posts, not accepted posts, denied post
try {admin.initializeApp(functions.config().firebase);} catch(e) {}
const db = admin.firestore();

interface Notification {
    title: string;
    body: string;
    link: string;
    follow: string;
    collectionFirst: string;
    collectionSecond: string;
    id: string;
    fieldConstraint: string;
    valueConstraint: string;
}
export const onCreate1 = functions.firestore.document('/{collectionFirst}/{idFirst}').onCreate((snapshot, context) => {
    db.doc('notifications/onCreate').get().then(dataSnapshot => {
        for(const notification of dataSnapshot.get('notificationList')) {
            const json = JSON.stringify(notification);
            const notificationObject: Notification = JSON.parse(json);
           if (notificationObject.collectionFirst === context.params.collectionFirst) {
               if (notificationObject.fieldConstraint === "") {
                   addNotificationToFollow(notificationObject.follow, notificationObject.body, notificationObject.link, notificationObject.title)
               } else if (snapshot.get(notificationObject.fieldConstraint) == notificationObject.valueConstraint){
                   addNotificationToFollow(notificationObject.follow, notificationObject.body, notificationObject.link, notificationObject.title)
               }
           }
        }
    }).catch(err => console.error(err))
    return null});

export const onCreate2 = functions.firestore.document('/{collectionFirst}/{idFirst}/{collectionSecond}/{idSecond}').onCreate((snapshot, context) => {
    db.doc('notifications/onCreate').get().then(dataSnapshot => {
        for(const notification of dataSnapshot.get('notificationList')) {
            const json = JSON.stringify(notification);
            const notificationObject: Notification = JSON.parse(json);
            if (((notificationObject.collectionFirst === context.params.collectionFirst) && (notificationObject.collectionSecond === context.params.collectionSecond)) && (notificationObject.id === context.params.idFirst)){
                if (notificationObject.fieldConstraint === "") {
                    addNotificationToFollow(notificationObject.follow, notificationObject.body, notificationObject.link, notificationObject.title)
                } else if (snapshot.get(notificationObject.fieldConstraint) == notificationObject.valueConstraint){
                    addNotificationToFollow(notificationObject.follow, notificationObject.body, notificationObject.link, notificationObject.title)
                }
            }
        }
    }).catch(err => console.error(err))
    return null});
