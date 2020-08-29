import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  orders = []
  pSub: Subscription
  rSub: Subscription


  constructor(
    private orderServ: OrderService
  ) { }

  ngOnInit() {
    this.pSub = this.orderServ.getAll().subscribe( orders => {
      this.orders = orders
    })
  }

  ngOnDesroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.rSub) {
      this.rSub.unsubscribe()
    }
  }

  remove (id) {
    this.rSub = this.orderServ.remove(id).subscribe( () => {
      this.orders = this.orders.filter( order => order.id !== id)
    })
  }

}
