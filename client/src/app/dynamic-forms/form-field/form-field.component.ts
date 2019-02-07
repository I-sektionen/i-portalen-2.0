import { Component, Input, OnDestroy } from '@angular/core';
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

  @Input() formField: DynamicFormField;
  @Input() form: FormGroup;

  fileName: string;
  uploading = false;
  uploadPercentage = 0;
  subscription: Subscription;

  constructor(
    private storageService: StorageService,
    private dateAdapter: DateAdapter<Date>,
  ) {
    dateAdapter.setLocale('sv-sv');
  }

  uploadFile(event) {
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
        this.form.get(this.formField.key).setValue(url);
        this.uploading = false;
      });
    }).catch(() => {
      this.uploading = false;
      this.uploadPercentage = 0;
      this.fileName = '';
    });
  }
}
