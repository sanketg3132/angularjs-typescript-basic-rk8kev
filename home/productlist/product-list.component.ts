import { IComponentOptions, IController } from 'angular';

class productListController implements IController {}

const productListComponent: IComponentOptions = {
  controller: productListController,
  template: require('./product-list.template.html')
};

export { productListComponent };
