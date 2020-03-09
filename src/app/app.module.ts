import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from '../environments/environment';
import { OrderdetailsfullComponent } from './orderdetailsfull/orderdetailsfull.component';
import { OrderlistComponent } from './orderdetailsfull/orderlist/orderlist.component';

import { FormsModule } from '@angular/forms';
import { OrderFilterPipe } from './orderdetailsfull/orderlist/orderFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrderdetailsfullComponent,
    OrderlistComponent,
    OrderFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule  ,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
