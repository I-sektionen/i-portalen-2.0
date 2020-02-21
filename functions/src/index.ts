import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import Timestamp = admin.firestore.Timestamp;

//posts, not accepted posts, denied post
try {admin.initializeApp(functions.config().firebase);} catch(e) {}
const db = admin.firestore();

//kolla varje timme
//const publishDated: string[] = [];

//New created post
export const firebaseOnCreatePost = functions.firestore.document('posts/{postId}').onCreate((snapshot,context) => {
    addNotification("notAccepted", snapshot.data()!.type, "events", "title")
    return null});

//Value in post is changed
export const firebaseOnUpdatePost = functions.firestore.document('posts/{postId}').onUpdate((change, context) => {
    addNotification("notAccepted", change.after.data()!.type, "events", "title")
return null});


// adds a notification with to the users who follows follow.
function addNotification(follow: String, body: String, link: String, title: String) {
  db.collection('users/').where("follow", 'array-contains', follow).get().then(dataSnapshot => {
    dataSnapshot.forEach(data => {
      db.collection('users/').doc(data.id).collection('notifications').add({body: body, link: link, timestamp: Timestamp.now(), title:title}).catch(err => console.error(err))
    })
  }).catch(err => console.error(err))
};
