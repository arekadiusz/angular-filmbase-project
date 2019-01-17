import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { IItems } from './items';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = 'http://filmbase.getsandbox.com/base';
  body = {};
  id: number;
  constructor(private http: HttpClient) { }

  getData(): Observable<IItems[]> {
    console.log(this.http.get(this.url));
    return this.http.get<IItems[]>(this.url);
  }
  postData(name, ingredients, description, price) {
    this.http.post(this.url,
      { id: 8,
        name: name,
        ingredients: ingredients,
        description: description,
        price: price})
        .subscribe((data: any) => {
        console.log(data);
        }
      );
  }
  deleteData(name) {
    this.http.delete((this.url + '/' + name)).subscribe((data: any) => {
      console.log(data);
    });
  }
  changeData(oldname, newname, newIngr, newDesc, newPrice, oldId) {
    this.body = {
      id: oldId,
      name : newname,
      ingredients : newIngr,
      description : newDesc,
      price : newPrice,
    };
    // console.log(oldname, newname, newIngr, newDesc, newPrice);
    this.http.put((this.url + '/' + oldname), this.body ).subscribe((data: any) => {
      console.log(data);
    });
  }

}
