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
  sortedItems: Array<any> = []
  
  constructor(private readonly itemService: ItemService) 
  {
    this.items.then(itemArr => this.sortedItems = itemArr)
  }

  onAddToCart(item: Item): void
  {
    this.itemService.addToCart(item)
  }

  onSortByPrice(): void
  {
    this.items.then(itemArr => this.sortedItems = itemArr.sort((a, b) => a.price - b.price))
  }

  onSortByName(): void
  {
    this.items.then(itemArr => this.sortedItems = itemArr.sort((a, b) => a.name.localeCompare(b.name)))
  }

  onFilterByType(): void
  {
    this.items.then(itemArr => this.sortedItems = itemArr.sort((a, b) => a.id.localeCompare(b.id)))
  }
}
