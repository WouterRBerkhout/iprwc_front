import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ItemOverviewComponent} from "./item/item-overview/item-overview.component";
import {OrderOverviewComponent} from "./orders/order-overview/order-overview.component";


const routes: Routes = [
  { path: '', component: ItemOverviewComponent},
  { path: 'orders', component: OrderOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
