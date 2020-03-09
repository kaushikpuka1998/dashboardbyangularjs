import { Component, OnInit } from '@angular/core';

import {OrderlistService } from '../shared/orderlist.service'
import { Orderlist } from '../shared/orderlist.=model'
import { element } from 'protractor';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orderList : Orderlist[] = [];
  Date : Date;
  constructor(private orderlistService: OrderlistService) { }

  ngOnInit() {
  var  x =  this.orderlistService.getData();
  x.snapshotChanges().subscribe(item =>{
    this.orderList = [];
    item.forEach(element=>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.orderList.push(y as Orderlist);
    });
  });
  }

}
