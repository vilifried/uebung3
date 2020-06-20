import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.page.html',
    styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

    myShoppingList: Array<{ name: string, quantity: number }>;

    constructor(private route: ActivatedRoute, private router: Router, private storage: Storage) {
    }

    navigateToAddItem() {
        this.router.navigate(['/add-item', {}]);
    }

    navigateToEditItem(parameter: number) {
        this.router.navigate(['/edit-item', {itemId: parameter}]);
    }

    async readStorage() {
        await this.storage.get('localShoppinglist').then((val) => {
            this.myShoppingList = val;
        });
        if (this.myShoppingList === null) {
            this.myShoppingList = [];
            await this.storage.set('localShoppinglist', this.myShoppingList);
        }
    }

    clearList() {
        this.storage.clear().then(r => console.log(r + 'cleared'));
        this.readStorage();
    }

    ngOnInit() {
        this.readStorage();
    }
}
