import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AngularFireUploadTask} from '@angular/fire/storage';
import {Post} from '../../shared/post.model';

import * as _moment from 'moment';
import {DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE} from 'ng-pick-datetime';
import {MomentDateTimeAdapter} from 'ng-pick-datetime-moment';
import {StorageService} from '../../../../core/storage/storage.service';
import {FireStorageService} from '../../../../core/firebase/fire-storage/fire-storage.service';
import {DatabaseService} from "../../../../core/database/database.service";
import {FeedbackService} from "../../../../core/feedback/feedback.service";
import {FeedbackMessage, FeedbackType} from "../../../../core/feedback/feedback.model";
import {Router} from "@angular/router";

//import { FormControl } from '@angular/forms';
//import { AngularFireUploadTask } from '@angular/fire/storage';

const moment = (_moment as any).default ? (_moment as any).default : _moment;

export const MY_CUSTOM_FORMATS = {
  parseInput: 'DD/MM/YYYY HH:mm',
  fullPickerInput: 'DD/MM/YYYY HH:mm',
  datePickerInput: 'DD/MM/YYYY',
  timePickerInput: 'HH:mm',
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
  fileName: string;
  uploading = false;
  uploadPercentage = 0;
  url: any;

  constructor(private storageService: StorageService,
              private fireStorageService: FireStorageService,
              private dataBaseService: DatabaseService<Post>,
              private feedbackServ: FeedbackService,
              private router: Router) {}

  ngOnInit() {}

  ngOnChanges() {
    this.postChange.emit(this.post);
  }



  async publish() {
    console.log('tjoooo');
    try {
      await this.dataBaseService.insert('posts', this.post);
      this.feedbackServ.message({message: FeedbackMessage.Publish, type: FeedbackType.Primary});
      await this.router.navigateByUrl('/');
    } catch (e) {
      this.feedbackServ.message({message: FeedbackMessage.DefaultError, type: FeedbackType.Error});
    }

  }

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
        this.post.imgNames.push(this.fileName);
        this.post.text +=
          '\n\n Your image: \n\n <img src="' + url + '" width="50%">\n';
      });
    });
  }


  deleteImg(imgURL) {
    this.fireStorageService.deleteFile(imgURL);

    const index = this.post.imgURLs.indexOf(imgURL);
    if (index > -1) {
      this.post.imgURLs.splice(index, 1);
      this.post.imgNames.splice(index, 1);

      let i = this.post.text.indexOf(imgURL)
      let j = i
      i = i - 10
      j = j + imgURL.length + 14

      this.post.text = this.post.text.replace(this.post.text.substring(i, j), '');
    }
  }
}
