import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private readonly http: HttpClient) {}

  get items(): Promise<Item[]> {
    return firstValueFrom(
      this.http.get<Item[]>("https://boolean-api-server.fly.dev/groceries?type=vegetable")
    )
  }

  // Local functions
  cart: Item[] = []
  total: number = 0

  addToCart(newItem: Item): void
  {
    let found: boolean = false

    this.cart.map((item) => 
    {
      if (item.name === newItem.name)
      {
        found = true
        item.quantity++
        this.total += newItem.price
      }
    })

    if (!found)
    {
      newItem.quantity = 1
      this.cart.push(newItem)
      this.total += newItem.price
    }

  }

  increaseQuantity(item: Item): void
  {
    item.quantity++
    this.total += item.price
  }

  decreaseQuantity(item: Item): void
  {
    item.quantity--

    if (item.quantity === 0)
      this.cart.splice(this.cart.indexOf(item), 1)

    this.total -= item.price

    if (this.total < 0.0005)
      this.total = 0
  }
}
