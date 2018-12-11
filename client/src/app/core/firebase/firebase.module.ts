import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { FirestoreService } from './firestore/firestore.service';
import { FireStorageService } from './fire-storage/fire-storage.service';
import { FireAuthService } from './fire-auth/fire-auth.service';

@NgModule({
  declarations: [],
  providers: [FireAuthService, FireStorageService, FirestoreService],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),
  ]
})
export class FirebaseModule { }
