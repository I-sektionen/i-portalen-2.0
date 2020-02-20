import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import Timestamp = admin.firestore.Timestamp;

try {admin.initializeApp(functions.config().firebase);} catch(e) {}
const db = admin.firestore();

//New Article
export const firebaseOnCreateArticle = functions.firestore.document('articles/{articleId}').onCreate((snapshot,context) => {
       addNotification(snapshot.data()!.name, snapshot.data()!.name, "events", snapshot.data()!.name)
  return null});



// adds a notification with to the users who follows follow.
function addNotification(follow: String, body: String, link: String, title: String) {
  db.collection('users/').where("follow", 'array-contains', follow).get().then(dataSnapshot => {
    dataSnapshot.forEach(data => {
      db.collection('users/').doc(data.id).collection('notifications').add({body: body, link: link, timestamp: Timestamp.now(), title:title}).catch(err => console.error(err))
    })
  }).catch(err => console.error(err))
};
