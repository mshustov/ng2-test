import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Resort } from '../resort/';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {
    @Input() resorts: Resort[]
    @Input() activeTag: string

    @Output() changeResort = new EventEmitter();

    constructor() {

    }

    ngOnInit() {}

    onClick(resort: Resort, e: MouseEvent){
        e.preventDefault();
        this.changeResort.emit({
            resort
        });
    }
}
