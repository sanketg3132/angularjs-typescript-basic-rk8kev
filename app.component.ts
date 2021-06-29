import { IComponentOptions, IController } from 'angular';

class AppController implements IController {
  static $inject = [];
  constructor() {}
  $onInit() {
    console.log('AppController');
  }
}

const app: IComponentOptions = {
  template: require('./app.component.html'),
  controller: AppController,
  bindings: {}
};
export { app };
