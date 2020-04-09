import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import {addNotificationToFollow, addNotificationToUser} from "./notifications";
//posts, not accepted posts, denied post
try {admin.initializeApp(functions.config().firebase);} catch(e) {}
const db = admin.firestore();

interface OnCreateNotification {
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
interface onCreateIndividualNotification {
    title: string;
    body: string;
    link: string;
    collectionFirst: string;
    collectionSecond: string;
    id: string;
    fieldConstraint: string;
}
export const onCreate1 = functions.firestore.document('/{collectionFirst}/{idFirst}').onCreate((snapshot, context) => {
    db.doc('notifications/onCreate').get().then(dataSnapshot => {
        const categories = Object.keys(dataSnapshot.data()!);
        for(const category of categories) {
            for (const notification of dataSnapshot.get(category)) {
                const json = JSON.stringify(notification);
                const notificationObject: OnCreateNotification = JSON.parse(json);
                if (notificationObject.collectionFirst === context.params.collectionFirst) {
                    if (notificationObject.fieldConstraint === "") {
                        addNotificationToFollow(notificationObject.follow, notificationObject.body, notificationObject.link, notificationObject.title, db)
                    } else if (snapshot.get(notificationObject.fieldConstraint) == notificationObject.valueConstraint) {
                        addNotificationToFollow(notificationObject.follow, notificationObject.body, notificationObject.link, notificationObject.title, db)
                    }
                }
            }
        }
    }).catch(err => console.error(err));
    db.doc('notifications/onCreateIndividual').get().then(dataSnapshot => {
        const categories = Object.keys(dataSnapshot.data()!);
        for(const category of categories) {
            for (const notification of dataSnapshot.get(category)) {
                const json = JSON.stringify(notification);
                const notificationObject: onCreateIndividualNotification = JSON.parse(json);
                console.log(notificationObject);
                if (notificationObject.collectionFirst === context.params.collectionFirst) {
                    addNotificationToUser(snapshot.get(String(notificationObject.fieldConstraint)), notificationObject.body, notificationObject.link, notificationObject.title, db)
                }
            }
        }
    }).catch(err => console.error(err));
    return null});

export const onCreate2 = functions.firestore.document('/{collectionFirst}/{idFirst}/{collectionSecond}/{idSecond}').onCreate((snapshot, context) => {
    db.doc('notifications/onCreate').get().then(dataSnapshot => {
        const categories = Object.keys(dataSnapshot.data()!);
        for(const category of categories) {
            for (const notification of dataSnapshot.get(category)) {
                const json = JSON.stringify(notification);
                const notificationObject: OnCreateNotification = JSON.parse(json);
                if (((notificationObject.collectionFirst === context.params.collectionFirst) && (notificationObject.collectionSecond === context.params.collectionSecond)) && (notificationObject.id === context.params.idFirst)) {
                    if (notificationObject.fieldConstraint === "") {
                       addNotificationToFollow(notificationObject.follow, notificationObject.body, notificationObject.link, notificationObject.title, db)
                    } else if (snapshot.get(notificationObject.fieldConstraint) == notificationObject.valueConstraint) {
                        addNotificationToFollow(notificationObject.follow, notificationObject.body, notificationObject.link, notificationObject.title, db)
                    }
                }
            }
        }
    }).catch(err => console.error(err));
    db.doc('notifications/onCreateIndividual').get().then(dataSnapshot => {
        const categories = Object.keys(dataSnapshot.data()!);
        console.log(categories);
        for(const category of categories) {
            console.log(dataSnapshot.get(category));
            for (const notification of dataSnapshot.get(category)) {
                const json = JSON.stringify(notification);
                console.log(json);
                const notificationObject: onCreateIndividualNotification = JSON.parse(json);
                console.log(notificationObject);
                if (((notificationObject.collectionFirst === context.params.collectionFirst) && (notificationObject.id === context.params.idFirst)) && (notificationObject.collectionSecond === String(context.params.collectionSecond))) {
                    addNotificationToUser(snapshot.get(String(notificationObject.fieldConstraint)), notificationObject.body, notificationObject.link, notificationObject.title, db)
                }
            }
        }
    }).catch(err => console.error(err));
    return null});



