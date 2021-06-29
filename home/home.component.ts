import { IComponentOptions, IController } from 'angular';
import { HomeService } from './home.service';
import { User } from './user/user';
class HomeController implements IController {}

const HomeComponent: IComponentOptions = {
  controller: HomeController,
  template: require('./home.template.html'),
  bindings: {}
};
export { HomeComponent };
