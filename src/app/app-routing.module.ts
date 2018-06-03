import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MenuComponent} from './menu/menu.component';
import {CoupanComponent} from './coupan/coupan.component';
import {HomeComponent} from './home/home.component';
import {CheckoutComponent} from './checkout/checkout.component';


const routes: Routes =
  [{path: 'coupan', component: CoupanComponent},
   {path: 'menu', component: MenuComponent},
   {path: '', component: HomeComponent},
    {path: 'checkout', component: CheckoutComponent}
  ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
