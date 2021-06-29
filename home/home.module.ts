import angular, { IModule } from 'angular';

let homeModule: IModule = angular.module('homeApp', []);

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { productViewComponent } from './productview/product-view.component';
import { productListComponent } from './productlist/product-list.component';
import { userCartComponet } from './usercart/user-cart.component';

homeModule.component('home', HomeComponent);
homeModule.service('homeService', HomeService);
homeModule.component('productView', productViewComponent);
homeModule.component('productList', productListComponent);
homeModule.component('userCart', userCartComponet);
export { homeModule };
