import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs';
import {User} from '../shared/user.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FeedbackService} from "../../../core/feedback/feedback.service";
import {FeedbackMessage, FeedbackType} from "../../../core/feedback/feedback.model";
//import {MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userObservable: Observable<User>;
  user:User;
  userInformation: FormGroup;
  editing = false;


  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private feedback: FeedbackService
    //public dialogRef: MatDialogRef<UserProfileComponent>
  ) {
    this.userInformation = fb.group({

      'class' : [''],
      'address':['', Validators.required],
      'city':['', Validators.required],
      'zipCode': ['', Validators.required],
      'allergies':[''],
      'newspaper':[false],
      'gender':[''],
      'currentYear': [''],
      'follow': ['']

    });
    this.userInformation.disable();

  }

  ngOnInit() {
    this.userService.user.subscribe(user =>
    {
      this.user = user;
      this.userInformation.patchValue({'address': user.address});
      this.userInformation.patchValue({'newspaper': user.newspaper});
      this.userInformation.patchValue({'city': user.city});
      this.userInformation.patchValue({'zipCode': user.zipCode});
      this.userInformation.patchValue({'allergies': user.allergies});
      this.userInformation.patchValue({'class': user.class});
      this.userInformation.patchValue({'gender': user.gender});
      this.userInformation.patchValue({'currentYear': user.currentYear});
    })
  }


  onSubmit(form) {
    Object.keys(form.value).forEach(attribute =>
    {
      if(form.value[attribute] != null)
      {
        this.user[attribute] = form.value[attribute];
      }
    });

    this.editFields();
    this.userService.updateUser(this.user).then(value => {
      const config = {
        message: FeedbackMessage.TextEdit,
        type: FeedbackType.Primary
      };
      this.feedback.message(config);
    }).catch(reason => {
      const config = {
        message: FeedbackMessage.DefaultError,
        type: FeedbackType.Error
      };
      this.feedback.message(config);
      this.editFields();
    });
  }

  editFields() {
    if (this.editing) {
      this.userInformation.disable();
      this.editing = false;
    } else {
      this.userInformation.enable();
      this.editing = true;
    }
  }
}
