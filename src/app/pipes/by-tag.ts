import { Pipe, PipeTransform } from '@angular/core';

import { Resort } from '../resort/';

@Pipe({ name: 'filterByTag' })
export class FilterResortByTag implements PipeTransform {
    transform(resorts: Resort[], tag) {
        return resorts.filter(
            resorts => resorts.tags.indexOf(tag) > -1
        );
    }
}
