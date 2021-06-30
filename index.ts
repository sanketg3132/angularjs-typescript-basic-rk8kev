import * as angular from 'angular';
import { app } from './app.component';
import { homeModule } from './home/home.module';

import './style';

homeModule.component('appRoot', app);

angular.element(document).ready(() => {
  console.log('bootstrap');
  angular.bootstrap(document, ['homeApp']);
});
