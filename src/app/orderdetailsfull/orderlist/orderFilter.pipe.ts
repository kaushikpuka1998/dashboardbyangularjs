import { PipeTransform, Pipe } from '@angular/core';
import {Orderlist} from '../shared/orderlist.=model'

@Pipe({
    name:'orderFilter'
})
export class OrderFilterPipe implements PipeTransform
{
    transform(orderlist:Orderlist[],searchTerm:string)
    {
        if(!orderlist || !searchTerm)
        {
            return orderlist;
        }
        return orderlist.filter(orderlist => orderlist.date.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1);
    }
}