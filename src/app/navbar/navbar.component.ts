import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Input() activeTag: string
    @Input() tags: string[]

    @Output()
    changeTag = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

    onClick(tag, e: MouseEvent){
        e.preventDefault();

        this.changeTag.emit({ tag });
    }
}
