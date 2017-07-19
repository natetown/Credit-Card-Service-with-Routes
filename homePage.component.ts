import {Component} from '@angular/core';
import {CardService} from './card.service';
import {OnInit} from '@angular/core';

@Component({

    selector: 'app-home-page',
    templateUrl: './homePage.component.html',
    providers: [CardService]
})

export class HomePageComponent {

    public cards: any;

    constructor(private cardService: CardService){}

    getCards() {
        this.cards = this.cardService.getCards();

    }

}
