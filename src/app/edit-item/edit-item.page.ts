import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-edit-item',
    templateUrl: './edit-item.page.html',
    styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {
    private points: number;

    constructor(private route: ActivatedRoute, private router: Router) {
        if (this.route.snapshot.paramMap.get('detailId')) {
            this.points = Number(this.route.snapshot.paramMap.get('detailId'));
            alert('Number' + this.points + 'durch Parameter gesetzt!');
        }
    }

    ngOnInit() {
    }

}
