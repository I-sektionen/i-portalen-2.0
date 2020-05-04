import * as admin from "firebase-admin";
import Timestamp = admin.firestore.Timestamp;
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {EventContext} from "firebase-functions";

interface OnCreateNotification {
    title: string;
    body: string;
    link: string;
    follow: string;
    collectionFirst: string;
    collectionSecond: string;
    id: string;
    fieldConstraint1: string;
    valueConstraint1: string;
    fieldConstraint2: string;
    valueConstraint2: string;
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

function addNotificationToFollow(follow: string, body: string, link: string, title: string, db:FirebaseFirestore.Firestore, snapshot: DocumentSnapshot) {
    const following = getFunctionValue(snapshot, follow);
    console.log(getFunctionValue(snapshot, follow));
    db.collection('users/').where("follow", 'array-contains', following).get().then(dataSnapshot => {
        dataSnapshot.forEach(data => {
            db.collection('users/').doc(data.id)
                .collection('notifications')
                .add({body: getFunctionValue(snapshot, body),
                    link: getFunctionValue(snapshot, link),
                    timestamp: Timestamp.now(),
                    title:getFunctionValue(snapshot, title)})
                .catch(err => console.error(1 + err));
            const ref = db.collection('users/').doc(data.id);
            ref.get().then(data2 =>{
                if(data2.exists){
                    ref.update({newNotifications: true}).catch(err => console.error(2 + err))
                }
            }).catch(err => console.error(3 + err))
        })
    }).catch(err => console.error(4 + err))
}

function addNotificationToUser(liuid: string, body: string, link: string, title: string, db:FirebaseFirestore.Firestore, snapshot: DocumentSnapshot) {
    db.collection('users/')
        .where("liuId", '==', liuid)
        .get().then(dataSnapshot => {
        dataSnapshot.forEach(data => {
            db.collection('users/').doc(data.id)
                .collection('notifications')
                .add({body: getFunctionValue(snapshot, body),
                    link: getFunctionValue(snapshot, link),
                    timestamp: Timestamp.now(),
                    title:getFunctionValue(snapshot, title)})
                .catch(err => console.error(5 + err));
            const ref = db.collection('users/').doc(data.id);
            ref.get().then(data2 =>{
                if(data2.exists){
                    ref.update({newNotifications: true}).catch(err => console.error(6 + err))
                }
            }).catch(err => console.error(7 + err))
        })
    }).catch(err => console.error(8 + err))
}

export function onCreateFunction1(snapshot: DocumentSnapshot, context: EventContext) {
    // onCreate follow
    const db = admin.firestore();
    db.doc('notifications/onCreate').get().then(dataSnapshot => {
        const categories = Object.keys(dataSnapshot.data()!);
        for(const category of categories) {
            for (const notification of dataSnapshot.get(category)) {
                const json = JSON.stringify(notification);
                const notificationObject: OnCreateNotification = JSON.parse(json);
                if (notificationObject.collectionFirst === context.params.collectionFirst) {
                    if ((notificationObject.fieldConstraint1 === "") && (notificationObject.fieldConstraint2 === "")) {
                        addNotificationToFollow(notificationObject.follow,
                            notificationObject.body, notificationObject.link,
                            notificationObject.title,
                            db, snapshot)
                    } else if (notificationObject.fieldConstraint2 === "") {
                        if (snapshot.get(notificationObject.fieldConstraint1) === notificationObject.valueConstraint1) {
                            addNotificationToFollow(notificationObject.follow,
                                notificationObject.body,
                                notificationObject.link,
                                notificationObject.title,
                                db, snapshot)
                        }
                    } else {
                        if ((snapshot.get(notificationObject.fieldConstraint1) === notificationObject.valueConstraint1) &&
                            (snapshot.get(notificationObject.fieldConstraint2) === notificationObject.valueConstraint2)) {
                            addNotificationToFollow(notificationObject.follow,
                                notificationObject.body,
                                notificationObject.link,
                                notificationObject.title,
                                db, snapshot)
                        }
                    }
                }
            }
        }
    }).catch(err => console.error(9 + err));

    // onCreate individual
    db.doc('notifications/onCreateIndividual').get().then(dataSnapshot => {
        const categories = Object.keys(dataSnapshot.data()!);
        for(const category of categories) {
            for (const notification of dataSnapshot.get(category)) {
                const json = JSON.stringify(notification);
                const notificationObject: onCreateIndividualNotification = JSON.parse(json);
                if (notificationObject.collectionFirst === context.params.collectionFirst) {
                    addNotificationToUser(snapshot.get(String(notificationObject.fieldConstraint)),
                        notificationObject.body,
                        notificationObject.link,
                        notificationObject.title,
                        db, snapshot)
                }
            }
        }
    }).catch(err => console.error(10 + err));
}

export function onCreateFunction2(snapshot: DocumentSnapshot, context: EventContext) {
    // onCreate follow
    const db = admin.firestore();
    db.doc('notifications/onCreate').get().then(dataSnapshot => {
        const categories = Object.keys(dataSnapshot.data()!);
        for(const category of categories) {
            for (const notification of dataSnapshot.get(category)) {
                const json = JSON.stringify(notification);
                const notificationObject: OnCreateNotification = JSON.parse(json);
                if (((notificationObject.collectionFirst === context.params.collectionFirst) &&
                    (notificationObject.collectionSecond === context.params.collectionSecond)) &&
                    (notificationObject.id === context.params.idFirst)) {
                    if ((notificationObject.fieldConstraint1 === "") && (notificationObject.fieldConstraint2 === "")) {
                        addNotificationToFollow(notificationObject.follow,
                            notificationObject.body, notificationObject.link,
                            notificationObject.title,
                            db, snapshot)
                    } else if (notificationObject.fieldConstraint2 === "") {
                        if (snapshot.get(notificationObject.fieldConstraint1) === notificationObject.valueConstraint1) {
                            addNotificationToFollow(notificationObject.follow,
                                notificationObject.body,
                                notificationObject.link,
                                notificationObject.title,
                                db, snapshot)
                        }
                    } else {
                        if ((snapshot.get(notificationObject.fieldConstraint1) === notificationObject.valueConstraint1) &&
                            (snapshot.get(notificationObject.fieldConstraint2) === notificationObject.valueConstraint2)) {
                            addNotificationToFollow(notificationObject.follow,
                                notificationObject.body,
                                notificationObject.link,
                                notificationObject.title,
                                db, snapshot)
                        }
                    }
                }
            }
        }
    }).catch(err => console.error(11 + err));

    //onCreate individual
    db.doc('notifications/onCreateIndividual').get().then(dataSnapshot => {
        const categories = Object.keys(dataSnapshot.data()!);
        for(const category of categories) {
            for (const notification of dataSnapshot.get(category)) {
                const json = JSON.stringify(notification);
                const notificationObject: onCreateIndividualNotification = JSON.parse(json);
                if (((notificationObject.collectionFirst === context.params.collectionFirst) &&
                    (notificationObject.id === context.params.idFirst)) &&
                    (notificationObject.collectionSecond === String(context.params.collectionSecond))) {
                    addNotificationToUser(snapshot.get(String(notificationObject.fieldConstraint)),
                        notificationObject.body,
                        notificationObject.link,
                        notificationObject.title,
                        db, snapshot)
                }
            }
        }
    }).catch(err => console.error(12 + err));
}
export function getFunctionValue(snapshot: DocumentSnapshot, string: string) {
    const newString = string.replace(/(f\{.*?\})/gi, (match) => {
        const valueString = match.substr(2, match.length - 3);
        return snapshot.get(valueString);
    });
    return newString
}
