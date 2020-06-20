import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageServiceService} from '../services/local-storage-service.service';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.page.html',
    styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

    myShoppingList: Array<{ name: string, quantity: number }>;

    constructor(private route: ActivatedRoute, private router: Router,
                private storage: Storage, private localStorageService: LocalStorageServiceService) {
    }

    navigateToAddItem() {
        this.router.navigate(['/add-item', {}]);
    }

    navigateToEditItem(parameter: number) {
        this.router.navigate(['/edit-item', {itemId: parameter}]);
    }

    load() {
        this.localStorageService.readStorage().then((value) => {
            this.myShoppingList = value;
        });
    }

    clearList() {
        this.storage.clear().then(r => console.log(r + 'cleared'));
        this.load();
    }

    ngOnInit() {
        this.localStorageService.readStorage().then((value) => {
            this.myShoppingList = value;
        });
    }
}
