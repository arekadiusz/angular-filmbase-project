import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

    nazwa: String;
    skladniki: String;
    przygotowanie: String;
    kwota: Number;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  postData(name, ingr , desc, price: number) {
    this.itemService.postData(name, ingr, desc, price);
  }

}
