import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiCartUrl = "https://carts.free.beeceptor.com ";

  constructor(private http: HttpClient) { }

  addToCart(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiCartUrl, product);
  }

  getCartItems() : Observable<Product[]>{
    return this.http.get<Product[]>(this.apiCartUrl);
  }

  clearCart() : Observable<void> {
    return this.http.delete<void>(this.apiCartUrl);
  }

}
