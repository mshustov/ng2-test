import { Component } from '@angular/core';

import { Resort } from './resort/';

import { tags, resorts } from './resort/dataset';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    resorts=resorts
    tags=tags

    activeResort: Resort
    activeTag: string

    constructor() {
        this.activeResort = resorts[0];
        this.activeTag = tags[0];
    }

    onResortChange({ resort }){
        this.activeResort = resort;
    }

    onTagChange({ tag }) {
        this.activeTag = tag;
    }
}
