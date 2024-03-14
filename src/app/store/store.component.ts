import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  items = this.itemService.items
  
  constructor(private readonly itemService: ItemService) {}

  onAddToCart(item: Item): void
  {
    this.itemService.addToCart(item)
  }
}
