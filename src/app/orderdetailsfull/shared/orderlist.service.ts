import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database' 
import { Orderlist  } from './orderlist.=model'
import { FormsModule } from'@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class OrderlistService {
  orderList:AngularFireList<any>;
  selectedOrder: Orderlist = new Orderlist();
  date : string;
  constructor(private firebase :AngularFireDatabase) { }

  getData()
  {
    this.orderList = this.firebase.list('Order_Details');
    return this.orderList;
  }
  applyFilter()
  {
   this.orderList.query;
  }
  
}
