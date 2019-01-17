import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path: 'item', component: ItemComponent },
  {path: 'add-items', component: AddItemsComponent},
  {path: 'edit-items', component: EditItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  , CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
