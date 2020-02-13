import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
try {admin.initializeApp(functions.config().firebase);} catch(e) {}
const db = admin.firestore();

/**
 * Firebase function 1
 * Triggered when a new user is created with Firebase Auth
 * Writes something to Firestore
 */
export const firebaseFunction = functions.auth.user().onCreate(async user => {
  if (user.email) {
    console.log('New user with email:', user.email)
    // save something to Firestore
    db.collection('users/').add({name:"test"}).catch(err => console.error(err))
  }
});
