import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import {addNotificationToFollow, addNotificationToUser, paths, notificationGroupType, followNotAccepted} from "./notifications";
//posts, not accepted posts, denied post
try {admin.initializeApp(functions.config().firebase);} catch(e) {}
const db = admin.firestore();

const onCreate = {createPath: "notAcceptedPosts", notificationGroupPath: 'notificationGroups/', notificationGroupType: 'type', createType: 'type', follow: 'followNotAccepted', notificationGroupBody: 'notAcceptedBody', notificationGroupLink: 'link', title: 'organisation' }

//New created post => notifications to admins
export const firebaseOnCreateNotAcceptedPost = functions.firestore.document('/{collection}/{id}').onCreate((snapshot, context) => {
    if(context.params.collection == onCreate.createPath) {
        db.collection(onCreate.notificationGroupPath).where(onCreate.notificationGroupType, '==', snapshot.get(onCreate.createType)).get().then(dataSnapshot => {
            dataSnapshot.forEach(data => {
                addNotificationToFollow(snapshot.get(onCreate.follow), data.get(onCreate.notificationGroupBody), data.get(onCreate.notificationGroupLink), snapshot.get(onCreate.title));
            });
        }).catch(err => console.error(err))
    }
    return null});

//New post is public => notifications to the once who follow the post organisation
export const firebaseOnPublishedPost = functions.firestore.document(paths.posts).onCreate((snapshot,context) => {
    db.collection(paths.notificationGroup).where(notificationGroupType, '==', snapshot.data()!.type).get().then(dataSnapshot => {
        dataSnapshot.forEach(data => {
    addNotificationToFollow(snapshot.data()!.organisation, data.data().newPostBody, data.data().link,  snapshot.data()!.organisation);
        });
    }).catch(err => console.error(err))
    return null});

//Denied status is changed
export const firebaseOnUpdatePost = functions.firestore.document(paths.notAcceptedPosts).onUpdate((change, context) => {
    if (change.after.data()!.denied !== change.before.data()!.denied) {
        db.collection(paths.notificationGroup).where(notificationGroupType, '==', change.after.data()!.type).get().then(dataSnapshot => {
            dataSnapshot.forEach(data => {
        if (change.after.data()!.denied === false) {
            addNotificationToFollow(followNotAccepted, data.data().notAcceptedBody, data.data().link, change.after.data()!.organisation)
        } else {
            addNotificationToUser(change.after.data()!.publisher, data.data().deniedBody, data.data().link, "Tyvärr")
        };
            });
        }).catch(err => console.error(err))
    };
return null});
