import { Component, OnInit, Input, Output } from '@angular/core';
import { IItems } from '../items';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css']
})
export class ItemsDetailsComponent implements OnInit {
  @Input() item: IItems;
  enableEdit = false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  deleteData(name) {
    this.itemService.deleteData(name);
  }

  changeHTML() {
    this.enableEdit = true;
  }
  changeData(oldName, newName, newIngr, newDesc, newPrice, oldId) {
    this.itemService.changeData(oldName, newName, newIngr, newDesc, newPrice, oldId);
    // console.log(oldName, newName, newIngr, newDesc, newPrice);
  }
}
