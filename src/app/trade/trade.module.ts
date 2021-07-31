import { NgModule } from '@angular/core';
//import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {ProductListComponent} from "../products/product-list.component";
import {TradeComponent} from "./trade.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
 //   ConvertToSpacesPipe,
    TradeComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'trade', component: TradeComponent }
      /*{
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }*/
    ]),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TradeModule { }
