import { Injectable } from '@angular/core';
import { FireStorageService } from '../firebase/fire-storage/fire-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private fireStorageService: FireStorageService,
  ) { }

  uploadFile(file: File, folder: string, fileName: string) {
    return this.fireStorageService.uploadFile(file, folder, fileName);
  }
}
