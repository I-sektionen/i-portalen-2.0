    import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerToken = "kärlek";

  constructor() { }

  ngOnInit() {
  }

  footerMouseEnter(){
    this.footerToken = 'fulkod';
  }

  footerMouseLeave(){
    this.footerToken = 'kärlek';
  }

}
