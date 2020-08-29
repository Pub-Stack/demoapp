import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  products = []
  pSub: Subscription
  rSub: Subscription
  productName

  constructor(
    private productServ: ProductService
  ) { }

  ngOnInit() {
    this.pSub = this.productServ.getAll().subscribe( products => {
      console.log(products)
      this.products = products
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
    this.rSub = this.productServ.remove(id).subscribe( () => {
      this.products = this.products.filter( product => product.id !== id)
    })
  }

}

