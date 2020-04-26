import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import {onCreateFunction1, onCreateFunction2} from "./notifications";

try {admin.initializeApp(functions.config().firebase);} catch(e) {}
const db = admin.firestore();

export const onCreate1 = functions.firestore.document('/{collectionFirst}/{idFirst}').onCreate((snapshot, context) => {
    console.log(context.params.collectionFirst);
    onCreateFunction1(db, snapshot, context);
    return null});

export const onCreate2 = functions.firestore.document('/{collectionFirst}/{idFirst}/{collectionSecond}/{idSecond}').onCreate((snapshot, context) => {
    onCreateFunction2(db, snapshot, context);
    return null});



