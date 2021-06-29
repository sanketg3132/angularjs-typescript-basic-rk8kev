import { IComponentOptions, IController } from 'angular';
import { Product } from '../productview/product';

class productListController implements IController {
  private product: Product;
  private onAddOrderInCart: () => (product: Product) => void;
  private onUpdateOrderInCart: () => (product: Product) => void;
  private onDeleteOrderInCart: () => (product: Product) => void;

  private addInCart(order) {
    order.isActive = false;
    this.onAddOrderInCart()(order);
  }
  private decreaseQuantity(product) {
    if (product.selectedQuantity != 0) {
      product.selectedQuantity--;
      this.onUpdateOrderInCart()(product);
    } else {
      product.isActive = true;
      this.onDeleteOrderInCart()(product);
    }
  }
  private increaseQuantity(product) {
    product.selectedQuantity++;
    this.onUpdateOrderInCart()(product);
  }
}

const productListComponent: IComponentOptions = {
  controller: productListController,
  template: require('./product-list.template.html'),
  bindings: {
    product: '<',
    onAddOrderInCart: '&',
    onDeleteOrderInCart: '&',
    onUpdateOrderInCart: '&'
  }
};

export { productListComponent };
