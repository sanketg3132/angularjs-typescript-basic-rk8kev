import { IComponentOptions, IController } from 'angular';
import { Product } from '../productview/product';

class userCartController implements IController {
  private showCart: boolean = false;
  private totalPayAmount: number = 0;
  private originalPriceTotal: number = 0;
  private product: Product;

  private onUpdateOrderInCart: () => (product: Product) => void;
  private onDeleteOrderInCart: () => (product: Product) => void;
  private onShowCart: () => (showCart: boolean) => void;
  cartList: any;

  $onInit() {
    for (const product of this.cartList) {
      this.totalPayAmount += product.sellingPrice * product.selectedQuantity;
      this.originalPriceTotal +=
        product.originalPrice * product.selectedQuantity;
    }
  }

  private close() {
    this.showCart = false;
    this.onShowCart()(this.showCart);
  }

  private decreaseQuantity(product) {
    console.log(product.selectedQuantity);
    this.totalPayAmount -= product.sellingPrice;
    this.originalPriceTotal -= product.originalPrice;
    if (product.selectedQuantity > 1) {
      product.selectedQuantity--;
      this.onUpdateOrderInCart()(product);
    } else {
      product.isActive = true;
      this.onDeleteOrderInCart()(product);
    }
    if (this.cartList.length === 0) {
      this.totalPayAmount = 0;
      this.originalPriceTotal = 0;
    }
  }
  private increaseQuantity(product) {
    this.totalPayAmount += product.sellingPrice;
    this.originalPriceTotal += product.originalPrice;
    product.selectedQuantity++;
    this.onUpdateOrderInCart()(product);
  }
}

const userCartComponet: IComponentOptions = {
  controller: userCartController,
  template: require('./user-cart.template.html'),
  bindings: {
    cartList: '<',
    onShowCart: '&',
    onDeleteOrderInCart: '&',
    onUpdateOrderInCart: '&'
  }
};

export { userCartComponet };
