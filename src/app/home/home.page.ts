import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    navigateToItemList() {
        this.router.navigate(['/item-list', {}]);
    }
}
