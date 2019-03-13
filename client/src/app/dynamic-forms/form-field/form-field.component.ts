import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { DynamicFormField } from '../shared/dynamic-form.model';
import { FormGroup } from '@angular/forms';
import { StorageService } from '../../core/storage/storage.service';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Subscription } from 'rxjs/index';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

  @Input() oldFilesDownloadUrls: string[];
  @Output() oldFilesDownloadUrlsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Input() newFilesDownloadUrls: string[];
  @Output() newFilesDownloadUrlsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Input() formField: DynamicFormField;
  @Input() form: FormGroup;

  fileName: string;
  uploading = false;
  uploadPercentage = 0;

  constructor(
    private storageService: StorageService,
    private dateAdapter: DateAdapter<Date>,
  ) {
    dateAdapter.setLocale('sv-sv');
  }

  uploadImageFile(event) {
    const file = event.target.files[0];
    if (file && file.type.indexOf('image') !== -1) {
      this.uploading = true;
      this.fileName = file.name;
      const uploadTask = this.storageService.uploadFile(
        file, this.formField['folder'], this.formField['fileName'] || this.fileName
      );
      this.trackUploadProgress(uploadTask);
      this.setDownloadUrl(uploadTask);
    }
  }

  trackUploadProgress(uploadTask: AngularFireUploadTask) {
    uploadTask.percentageChanges().subscribe(percentage => {
      this.uploadPercentage = percentage;
    });
  }

  setDownloadUrl(uploadTask: AngularFireUploadTask) {
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
  }
}
