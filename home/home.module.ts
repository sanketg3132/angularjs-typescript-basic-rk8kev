import angular, { IModule } from 'angular';

let homeModule: IModule = angular.module('homeApp', []);

import { UserDetail } from './user/user-detail.component';
import { HomeComponent } from './home.component';
import { ChildComponent } from './child/child.component';
import { HomeService } from './home.service';
import { productViewComponent } from './productview/product-view.component';
import { productListComponent } from './productlist/product-list.component';

homeModule.component('home', HomeComponent);
homeModule.component('child', ChildComponent);
homeModule.component('userDetail', UserDetail);
homeModule.service('homeService', HomeService);
homeModule.component('productView', productViewComponent);
homeModule.component('productList', productListComponent);
export { homeModule };
