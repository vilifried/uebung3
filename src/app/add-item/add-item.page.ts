import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.page.html',
    styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

    myShoppingList: Array<{ name: string, quantity: number }>;
    itemToAdd: string;
    quantityToAdd: number;

    constructor(private storage: Storage) {
    }

    addItem() {
        this.readStorage();
        this.myShoppingList.push({name: this.itemToAdd, quantity: this.quantityToAdd});
        this.storage.set('localShoppinglist', this.myShoppingList);
        this.readStorage();
        this.clearInputFields();
    }

    clearInputFields() {
        this.itemToAdd = '';
        this.quantityToAdd = null;
    }

    readStorage() {
        this.storage.get('localShoppinglist').then((val) => {
            this.myShoppingList = val;
        });
    }

    // setStorage() {
    //     // set a key/value
    //     this.storage.set('item', {name: 'Tomatoes', quantity: '5'})
    //         .then(
    //             (data) => console.log('Stored first item!', data),
    //             error => console.error('Error storing item', error)
    //         );
    // }

    // readStorage() {
    //     this.storage.get('item')
    //         .then(
    //             data => console.log(data),
    //             error => console.error(error)
    //         );
    // }


    ngOnInit() {
        this.readStorage();
    }

}
