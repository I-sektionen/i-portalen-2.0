import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-voting',
  templateUrl: './create-voting.component.html',
  styleUrls: ['./create-voting.component.scss']
})
export class CreateVotingComponent implements OnInit {

  createVotingsForm = new FormGroup({ });


  admins = new FormControl();
  adminList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  accesList: string[] = [
    'Publik tillgång till detaljerad information om röstningen',
    'Publik tillgång till begränsad information om röstningen',
    'Private åtkomst enbart för admin',
    'Privat åtkomst enbart för utvalda användare',
  ];
  typeList: string[] = [
    'Gör resultat synliga innan man röstat',
    'Gör resultat synliga efter man röstat',
    'Gör resultat synliga när omröstningen är stängd'];
  publishTypeList: string[] = [
    'Visa när event startar',
    'Visa när admin startar omröstning',
    'Starta vid förspecifierad tid'];
  eventList: string[] = [
    'Vårmötet',
    'Vintermötet',
    'webgroupmötet'];



constructor() { }

  ngOnInit() {
  }

}
