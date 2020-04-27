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

 function addNotificationToFollow(follow: string, body: string, link: string, title: string, db:FirebaseFirestore.Firestore ) {
    db.collection('users/').where("follow", 'array-contains', follow).get().then(dataSnapshot => {
        dataSnapshot.forEach(data => {
            db.collection('users/').doc(data.id).collection('notifications').add({body: body, link: link, timestamp: Timestamp.now(), title:title}).catch(err => console.error(err));
            const ref = db.collection('users/').doc(data.id);
                ref.get().then(data2 =>{
                if(data2.exists){
                    ref.update({newNotifications: true}).catch(err => console.error(err))
                }
            }).catch(err => console.error(err))
        })
    }).catch(err => console.error(err))
}

 function addNotificationToUser(liuid: string, body: string, link: string, title: string, db:FirebaseFirestore.Firestore ) {
    db.collection('users/').where("liuId", '==', liuid).get().then(dataSnapshot => {
        dataSnapshot.forEach(data => {
            db.collection('users/').doc(data.id).collection('notifications').add({body: body, link: link, timestamp: Timestamp.now(), title:title}).catch(err => console.error(err));
            const ref = db.collection('users/').doc(data.id);
            ref.get().then(data2 =>{
                if(data2.exists){
                    ref.update({newNotifications: true}).catch(err => console.error(err))
                }
            }).catch(err => console.error(err))
        })
    }).catch(err => console.error(err))
}
export function onCreateFunction1(snapshot: DocumentSnapshot, context: EventContext) {
    const db = admin.firestore();
    db.doc('notifications/onCreate').get().then(dataSnapshot => {
        const categories = Object.keys(dataSnapshot.data()!);
        for(const category of categories) {
            for (const notification of dataSnapshot.get(category)) {
                const json = JSON.stringify(notification);
                const notificationObject: OnCreateNotification = JSON.parse(json);
                if (notificationObject.collectionFirst === context.params.collectionFirst) {
                       if (notificationObject.fieldConstraint === "") {
                            addNotificationToFollow(notificationObject.follow, notificationObject.body, notificationObject.link, notificationObject.title, db)
                       } else if (snapshot.get(notificationObject.fieldConstraint) === notificationObject.valueConstraint) {
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
}

export function onCreateFunction2(snapshot: DocumentSnapshot, context: EventContext) {
    const db = admin.firestore();
    db.doc('notifications/onCreate').get().then(dataSnapshot => {
        const categories = Object.keys(dataSnapshot.data()!);
        for(const category of categories) {
            for (const notification of dataSnapshot.get(category)) {
                const json = JSON.stringify(notification);
                const notificationObject: OnCreateNotification = JSON.parse(json);
                if (((notificationObject.collectionFirst === context.params.collectionFirst) && (notificationObject.collectionSecond === context.params.collectionSecond)) && (notificationObject.id === context.params.idFirst)) {
                    if (notificationObject.fieldConstraint === "") {
                        addNotificationToFollow(notificationObject.follow, notificationObject.body, notificationObject.link, notificationObject.title, db)
                    } else if (snapshot.get(notificationObject.fieldConstraint) === notificationObject.valueConstraint) {
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
}
