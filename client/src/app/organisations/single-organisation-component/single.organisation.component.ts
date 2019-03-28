import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
    selector: 'app-organisations',
    templateUrl: './single.organisation.component.html',
    styleUrls: ['./single.organisation.component.scss']
})
export class SingleOrganisationComponent implements OnInit {

    tiles = [
        { title: 'Webgroup', cols: 4, rows: 2, color: '#142A5C', class: "org-icon", url: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png" },
        { cols: 8, rows: 2, color: '#B7A0E8', class: "org-header", url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" },
        { cols: 7, rows: 3, color: '#D9EDD9', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros sem, porttitor a suscipit in, rutrum a nulla. Fusce pretium suscipit odio sit amet maximus. Aliquam id erat nisl. Suspendisse placerat molestie quam, id vehicula dui porttitor ac. Phasellus facilisis gravida odio. Pellentesque ut posuere turpis. Praesent a ullamcorper orci, nec euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec purus in lectus eleifend pulvinar. Praesent ultrices lacus mi, vel blandit orci vestibulum ac. Sed pulvinar malesuada nunc eu cursus. Integer pellentesque est placerat nunc facilisis pretium.' },
        {
            members: [
                { name: "Anton Revin", role: "Webmaster", email:'webmater@isek.se'},
                { name: "Elon Brange", role: "Designansvarig", email: ''  },
                { name: "Anton Moberg", role: "Utvecklare" , email:'anton@isek.se' },
                { name: "Jesper Hellström", role: "Utvecklare", email:'' },
                { name: "Erik Ståhl", role: "Utvecklare", email:'erik@isek.se'  },
                { name: "Elvin Granat", role: "Utvecklare", email:'elvin@isek.se'  },
                { name: "Filip Isaksson", role: "Utvecklare" , email:'' },
                { name: "Erik Wiström", role: "Utvecklare" , email:'erik@isek.se' },
            ], cols: 5, rows: 3, color: '#D9EDD9'
        }
    ]
    constructor() { }

    ngOnInit() {
    }

}
