import { Component, OnInit } from '@angular/core';

import {OrderlistService} from './shared/orderlist.service'
@Component({
  selector: 'app-orderdetailsfull',
  templateUrl: './orderdetailsfull.component.html',
  styleUrls: ['./orderdetailsfull.component.css'],
  providers: [OrderlistService]
})
export class OrderdetailsfullComponent implements OnInit {

  constructor(private orderlistService : OrderlistService) { }

  ngOnInit() {
  }

}
