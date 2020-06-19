import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-edit-item',
    templateUrl: './edit-item.page.html',
    styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

    private itemId: number;
    itemToEdit: string;
    quantityToEdit: number;
    myShoppingList: Array<{ name: string, quantity: number }>;

    constructor(private route: ActivatedRoute, private router: Router, private storage: Storage) {
        if (this.route.snapshot.paramMap.get('itemId')) {
            this.itemId = Number(this.route.snapshot.paramMap.get('itemId'));
        }
    }

    editItem() {
        this.myShoppingList[this.itemId].name = this.itemToEdit;
        this.myShoppingList[this.itemId].quantity = this.quantityToEdit;
        this.storage.set('localShoppinglist', this.myShoppingList);
    }

    async readStorage() {
        await this.storage.get('localShoppinglist').then((val) => {
            this.myShoppingList = val;
        });
    }

    setInputValue() {
        this.itemToEdit = this.myShoppingList[this.itemId].name;
        this.quantityToEdit = this.myShoppingList[this.itemId].quantity;
    }

    ngOnInit() {
        this.readStorage().then(r => this.setInputValue());
    }
}
