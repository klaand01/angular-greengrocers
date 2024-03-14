import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart = this.itemService.cart

  constructor(private readonly itemService: ItemService) {}

  onIncreaseQuantity(item: Item): void
  {
    this.itemService.increaseQuantity(item)
  }

  onDecreaseQuantity(item: Item): void
  {
    this.itemService.decreaseQuantity(item)
  }
}
