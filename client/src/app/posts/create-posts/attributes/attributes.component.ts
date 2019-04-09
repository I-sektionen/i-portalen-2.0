import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { DynamicFormField } from '../../../dynamic-forms/shared/dynamic-form.model';
import { FormGroup } from '@angular/forms';
import { Post } from '../../shared/post.model';
//import { FormControl } from '@angular/forms';

import { StorageService } from '../../../core/storage/storage.service';
import { PostContentComponent } from '../post-content/post-content.component';
//import { AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  @Output() postChange = new EventEmitter();
  @Input() post: Post;

  typeOne: string = 'Artikel';
  typeTwo: string = 'Event';

  constructor(private storageService: StorageService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.postChange.emit(this.post);
  }

  // @Input() oldFilesDownloadUrls: string[];
  // @Output() oldFilesDownloadUrlsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  // @Input() newFilesDownloadUrls: string[];
  // @Output() newFilesDownloadUrlsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  //@Input() formField: DynamicFormField;
  // @Input() form: FormGroup;

  @Output() eventEmitter = new EventEmitter();

  fileName: string;
  uploading = false;
  uploadPercentage = 0;

  url: any;

  uploadImageFile(event) {
    const file = event.target.files[0];
    if (file && file.type.indexOf('image') !== -1) {
      this.uploading = true;
      this.fileName = file.name;

      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as post.text url

      const uploadTask = this.storageService.uploadFile(
        file,
        'folderName',
        this.fileName
      );

      reader.onload = event => {
        // called once readAsDataURL is completed
        this.url = reader.result;
        this.getDownloadUrl(uploadTask);
      };

      this.trackUploadProgress(uploadTask);
    }
  }

  trackUploadProgress(uploadTask: AngularFireUploadTask) {
    uploadTask.percentageChanges().subscribe(percentage => {
      this.uploadPercentage = percentage;
    });
  }

  getDownloadUrl(uploadTask: AngularFireUploadTask) {
    uploadTask.then(done => {
      done.ref.getDownloadURL().then(url => {
        this.eventEmitter.emit(url);
      });
    });
  }
}
