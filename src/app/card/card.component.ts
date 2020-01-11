import {Component, OnInit} from '@angular/core';
import AOS from 'aos';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    constructor() {
    }

    faChevronDown = faChevronDown;
    faChevronUp = faChevronUp;
    public isCollapsed1 = false;
    public isCollapsed2 = true;
    public isCollapsed3 = true;
    public isCollapsed4 = true;

    public unCollapsed() {
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.isCollapsed3 = true;
        this.isCollapsed4 = true;
    }

    ngOnInit() {
        AOS.init({
            duration: 2000,
            delay: 1200,
        });
    }
}
