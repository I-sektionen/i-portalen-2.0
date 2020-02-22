import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import Timestamp = admin.firestore.Timestamp;

//posts, not accepted posts, denied post
try {admin.initializeApp(functions.config().firebase);} catch(e) {}
const db = admin.firestore();

//kolla varje timme
//const publishDated: string[] = [];

//New created post => notifications to admins
export const firebaseOnCreateNotAcceptedPost = functions.firestore.document('notAcceptedPosts/{notAcceptedPostId}').onCreate((snapshot,context) => {
    addNotificationToFollow("notAccepted", "test", "events", "Ny post att acceptera")
    return null});

//New post is public => notifications to the once who follow the post organisation
export const firebaseOnPublishedPost = functions.firestore.document('posts/{postId}').onCreate((snapshot,context) => {
    addNotificationToFollow(snapshot.data()!.organisation, snapshot.data()!.type, "events", "ny post")
    return null});

//Denied status is changed
export const firebaseOnUpdatePost = functions.firestore.document('notAcceptedPosts/{notAcceptedPostId}').onUpdate((change, context) => {
    if(change.after.data()!.denied === false) {
        addNotificationToFollow("notAccepted", "test", "events", "Ny post att acceptera")
    } else {
        addNotificationToUser("wilri858", "testBody", "events", "hoppasTitle")
    }
return null});


// adds a notification with to the users who follows follow.
function addNotificationToFollow(follow: String, body: String, link: String, title: String) {
  db.collection('users/').where("follow", 'array-contains', follow).get().then(dataSnapshot => {
    dataSnapshot.forEach(data => {
      db.collection('users/').doc(data.id).collection('notifications').add({body: body, link: link, timestamp: Timestamp.now(), title:title}).catch(err => console.error(err))
    })
  }).catch(err => console.error(err))
};

function addNotificationToUser(liuid: String, body: String, link: String, title: String) {
    db.collection('users/').where("liuId", '==', liuid).get().then(dataSnapshot => {
        dataSnapshot.forEach(data => {
            db.collection('users/').doc(data.id).collection('notifications').add({body: body, link: link, timestamp: Timestamp.now(), title:title}).catch(err => console.error(err))
        })
    }).catch(err => console.error(err))
};



//ska lyssna på ändringar i public => notifikation till de som förljer
//ska lyssna på ändringar i denied => notifikation för den som publicerade/de som kan acceptera
