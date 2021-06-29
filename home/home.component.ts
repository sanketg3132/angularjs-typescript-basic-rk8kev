import { IComponentOptions, IController } from 'angular';
import { HomeService } from './home.service';
import { User } from './user/user';
class HomeController implements IController {
  private name = {
    firstName: 'Home',
    lastName: 'Component'
  };
  private idFromChild: number = 0;
  private users: User[] = [];

  private static $inject: string[] = ['homeService'];

  constructor(private homeService: HomeService) {}

  $onInit() {
    this.homeService.fetchData().then(response => {
      this.users = response.data;
    });
  }

  private onCallParentCallback = id => {
    this.idFromChild = id;
  };
}

const HomeComponent: IComponentOptions = {
  controller: HomeController,
  template: require('./home.template.html'),
  bindings: {}
};
export { HomeComponent };
