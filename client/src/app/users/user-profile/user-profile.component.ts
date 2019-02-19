import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs';
import {User} from '../shared/user.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
    private fb: FormBuilder
    //public dialogRef: MatDialogRef<UserProfileComponent>
  ) {
    this.userInformation = fb.group({

      'class' : [''],
      'address':['', Validators.required],
      'city':['', Validators.required],
      'zip_code':['', Validators.required],
      'allergies':[''],
      'newspaper':[false],
      'gender':[''],
      'currentYear': [''],

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
    this.userService.updateUser(this.user).then((function () {
      console.log("Dina uppgifter har uppdaterats");
    })).catch(function() {
      console.log("failed");
      this.editFields();
    });
  }

   editFields()
  {
    console.log("edit fields called");
    if(this.editing)
    {
      this.userInformation.disable();
      this.editing = false;
    }
    else {
      this.userInformation.enable();
      this.editing = true;
    }
  }
}
