import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AngularFireUploadTask} from "@angular/fire/storage";
import {DynamicFormField} from "../../../dynamic-forms/shared/dynamic-form.model";
import {FormGroup} from "@angular/forms";
//import { FormControl } from '@angular/forms';


import { StorageService } from '../../../core/storage/storage.service';
import { AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  title: string;
  eventType: boolean = false;
  typeOne: string = 'Artikel';
  typeTwo: string = 'Event';
  postTypeIsArticle: boolean = true;
  ingress: string = '';
  choosenCategories: any[];
  //categoryList: string[] = ['Artikel', 'Event', 'Annons', 'Workshop'];
  categoryList: any[] = [
    { name: 'Artikel', id: 1 },
    { name: 'Event', id: 2 },
    { name: 'Annons', id: 3 },
    { name: 'Workshop', id: 4 }
  ];

  constructor(private storageService: StorageService) {}

  ngOnInit() {}


  @Input() oldFilesDownloadUrls: string[];
  @Output() oldFilesDownloadUrlsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Input() newFilesDownloadUrls: string[];
  @Output() newFilesDownloadUrlsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  //@Input() formField: DynamicFormField;
  @Input() form: FormGroup;

  fileName: string;
  uploading = false;
  uploadPercentage = 0;

  uploadImageFile(event) {
    const file = event.target.files[0];
    if (file && file.type.indexOf('image') !== -1) {
      this.uploading = true;
      this.fileName = file.name;

      const uploadTask = this.storageService.uploadFile(
        file, 'folderName',  this.fileName
      );
      this.trackUploadProgress(uploadTask);
     // this.setDownloadUrl(uploadTask);
    }
  }

  trackUploadProgress(uploadTask: AngularFireUploadTask) {
    uploadTask.percentageChanges().subscribe(percentage => {
      this.uploadPercentage = percentage;
    });
  }

  /*setDownloadUrl(uploadTask: AngularFireUploadTask) {
    alert("Hej");
    uploadTask.then(done => {
      done.ref.getDownloadURL().then(url => {

        // Download URLs for old files
        if (this.form.get(this.formField.key).value) {
          this.oldFilesDownloadUrls.push(this.form.get(this.formField.key).value);
          this.oldFilesDownloadUrlsChange.emit(this.oldFilesDownloadUrls);
        }

        // Set download url as value in form
        this.form.get(this.formField.key).setValue(url);
        this.newFilesDownloadUrls.push(url);
        this.newFilesDownloadUrlsChange.emit(this.newFilesDownloadUrls);
        this.uploading = false;
      });
    }).catch(() => {
      this.uploading = false;
      this.uploadPercentage = 0;
      this.fileName = '';
    });
  }*/
}
