import { Component, OnInit } from '@angular/core';
import { IItems } from '../items';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  selectedItem: IItems;
  items = [];

  constructor(private itemService: ItemService) {
  }
  ngOnInit() {
    this.itemService.getData().subscribe(data => {this.items = data; console.log(data); });
  }

  onSelect(item: IItems): void {
    this.selectedItem = item;
  }


}
