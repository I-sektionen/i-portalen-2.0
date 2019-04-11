import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { DynamicFormField } from '../../../dynamic-forms/shared/dynamic-form.model';
import { FormGroup } from '@angular/forms';
import { Post } from '../../shared/post.model';

import * as _moment from 'moment';
import {
  DateTimeAdapter,
  OWL_DATE_TIME_FORMATS,
  OWL_DATE_TIME_LOCALE
} from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';

//import { FormControl } from '@angular/forms';

import { StorageService } from '../../../core/storage/storage.service';
//import { AngularFireUploadTask } from '@angular/fire/storage';

const moment = (_moment as any).default ? (_moment as any).default : _moment;

export const MY_CUSTOM_FORMATS = {
  parseInput: 'DD/MM/YYYY HH:MM',
  fullPickerInput: 'DD/MM/YYYY HH:MM',
  datePickerInput: 'DD/MM/YYYY',
  timePickerInput: 'HH:MM',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'DD/MM/YYYY',
  monthYearA11yLabel: 'MMMM YYYY'
};

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
  providers: [
    {
      provide: DateTimeAdapter,
      useClass: MomentDateTimeAdapter,
      deps: [OWL_DATE_TIME_LOCALE]
    },

    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS }
  ]
})
export class AttributesComponent implements OnInit {
  @Output() postChange = new EventEmitter();
  @Input() post: Post;

  typeOne: string = 'Artikel';
  typeTwo: string = 'Event';
  minPublishDate: Date = new Date(Date.now());
  eventDeadlines: any = [
    /* Event starting time */
    {
      placeholder: 'Starttid',
      model: 'post.eventStartTime',
      name: 'eventStartTime',
      min: 'post.publishTime',
      idName: 'est'
    }

    /* Event finishing time */
    /* eventFinishTime: Date; */

    /* Last date for registering */
    /* lastRegisterDate: Date; */

    /* Last date for unregistering */
    /* lastUnregisterDate: Date; */

    /* Extra registering deadline (for getting food etc.) */
    /* extraRegisterDeadline: Date; */
  ];

  constructor(private storageService: StorageService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.postChange.emit(this.post);
  }

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
       // this.url = reader.result;
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
        this.uploading = false;
        this.url = url;
        this.post.imgURLs.push(url);
        //this.post.text += '\n\n Your image: \n\n![](' + url + ')';
        this.post.text +=
          '\n\n Your image: \n\n <img src="' + url + '" width="50%">\n';
      });
    });
  }
}
