import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart = this.itemService.cart

  constructor(private readonly itemService: ItemService) {}
}
