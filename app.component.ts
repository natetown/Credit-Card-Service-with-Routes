///<reference path="cardlist.component.ts"/>
import {Component} from '@angular/core';
import {CardListComponent} from './cardlist.component';
import {CardService} from './card.service';

@Component({
    selector: 'app-my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor() {
    console.log('Done');
    }
}
