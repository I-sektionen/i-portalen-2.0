import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import Timestamp = admin.firestore.Timestamp;

try {admin.initializeApp(functions.config().firebase);} catch(e) {}
const db = admin.firestore();
const collections = {
  users: 'user/' 
};
export const firebaseOnCreateArticle = functions.firestore.document('articles/{articleId}').onCreate( (snapshot,context) => {
  addNotification("articles", snapshot.data()!.name, "events", "Ny artikel");
  return null;
          });

// adds a notification with to the users who follows follow.
const addNotification = (follow: string, body: string, link: string, title: string) => {
  db.collection(collections.users).where("follow", 'array-contains', follow).get().then(dataSnapshot => {
    dataSnapshot.forEach(data => {
      db.collection('users/').doc(data.id).collection('notifications').add({body: body, link: link, timestamp: Timestamp.now(), title:title}).catch(err => console.error(err))
    });
  }).catch(err => console.error(err));
};
