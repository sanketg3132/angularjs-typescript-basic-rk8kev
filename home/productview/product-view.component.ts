import { IComponentOptions, IController } from 'angular';
import { HomeService } from './home.service';
import { Product } from './product';

class ProductController implements IController {
  private productList: Product[] = [];

  private static $inject: string[] = ['homeService'];

  constructor(private homeService: HomeService) {}
  $onInit() {
    this.homeService.fetchData().then(response => {
      this.productList = response.data.products;
    });
  }
}
const productViewComponent: IComponentOptions = {
  controller: ProductController,
  template: require('./product-view.template.html'),
  bindings: {}
};

export { productViewComponent };
