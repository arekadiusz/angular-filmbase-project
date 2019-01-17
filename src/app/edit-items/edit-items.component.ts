import { Component, OnInit, Input } from '@angular/core';
import { IItems } from '../items';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
  @Input() item: IItems;

  constructor(private itemComp: ItemComponent) { }

  ngOnInit() {
  }

}
