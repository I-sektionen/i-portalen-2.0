import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {

  constructor(
    private angularFireStorage: AngularFireStorage,
  ) { }

  private getPath(folder: string, name: string) {
    return `${folder}/${name}`;
  }

  uploadFile(file: File, folder: string, fileName: string): AngularFireUploadTask {
    const filePath = this.getPath(folder, fileName);
    const ref = this.angularFireStorage.ref(filePath);
    return ref.put(file);
  }
}
