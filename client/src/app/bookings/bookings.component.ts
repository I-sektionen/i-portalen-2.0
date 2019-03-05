import { Component, OnInit } from '@angular/core';
import * as SimpleMDE from "simplemde";

// import { SimpleMDE } from 'simplemde';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  simplemde;// = new SimpleMDE({ element: document.getElementById("editor") });
  data;
  constructor() {
   // var simplemde = new SimpleMDE({ element: document.getElementById("editor") });

  }

  ngOnInit() {
    this.simplemde = new SimpleMDE({
      element: document.getElementById("editor"),
      autofocus: true,
      hideIcons: ["fullscreen", "link", "side-by-side"],

        /*toolbar: [{
          name: "bold",
          action: SimpleMDE.toggleBold,
          className: "fa fa-bold",
          title: "Bold (Ctrl+B)",
        },
          "|", // Separator
        ],*/


      });

    this.simplemde.codemirror.on("change", () => this.testClick());
  }

   onClick(){
    //var simplemde = new SimpleMDE({ element: document.getElementById("editor") });

    //alert(this.simplemde.value());

    this.simplemde.togglePreview();

   // document.getElementById('content').innerHTML = "HEJ";

    /*document.getElementById('content').innerHTML =
      marked('# Marked in the browser\n\nRendered by **marked**.');*/
  }

 testClick(){
    document.getElementById('content').innerHTML =
      marked(this.simplemde.value());
  }

  changeFunc(){
    alert("Hello World!");
  }

}

// https://www.npmjs.com/package/simplemde
// https://github.com/markedjs/marked
