import * as admin from "firebase-admin";
import Timestamp = admin.firestore.Timestamp;

export function addNotificationToFollow(follow: String, body: String, link: String, title: String, db:FirebaseFirestore.Firestore ) {
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

export function addNotificationToUser(liuid: String, body: String, link: String, title: String, db:FirebaseFirestore.Firestore ) {
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



