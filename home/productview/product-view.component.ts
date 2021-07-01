import { IComponentOptions, IController } from 'angular';
import { HomeService } from './home.service';
import { Product } from './product';

class ProductController implements IController {
  private productList: Product[] = [];
  private userCartList: Product[] = [];
  private orders: number = 0;
  private showCart: boolean = false;
  private static $inject: string[] = ['homeService'];

  constructor(private homeService: HomeService) {}
  $onInit() {
    this.homeService.fetchData().then(response => {
      this.productList = response.data.products;
    });
  }

  private onAddOrderInCart = order => {
    this.userCartList.push(order);
    this.orders = this.userCartList.length;
  };

  private onDeleteOrderInCart = order => {
    var idx = this.userCartList.indexOf(order);
    if (idx >= 0) {
      this.userCartList.splice(idx, 1);
    }
    this.orders = this.userCartList.length;
  };

  private onUpdateOrderInCart = order => {
    for (let i = 0; i < this.userCartList.length; i++) {
      if (this.userCartList[i].id == order.id) {
        this.userCartList[i] = order;
      }
    }
  };
  private viewCart() {
    this.showCart = true;
  }

  private onShowCart = showCart => {
    this.showCart = showCart;
  };
}
const productViewComponent: IComponentOptions = {
  controller: ProductController,
  template: require('./product-view.template.html'),
  bindings: {}
};

export { productViewComponent };
