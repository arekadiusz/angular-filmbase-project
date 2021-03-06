import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FormsModule} from '@angular/forms';
import { ItemsDetailsComponent } from './items-details/items-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddItemsComponent } from './add-items/add-items.component';
import { EditItemsComponent } from './edit-items/edit-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemsDetailsComponent,
    AddItemsComponent,
    EditItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
