import { IHttpPromise, IHttpService, IPromise } from 'angular';
import { Product } from './productview/product';
import { User } from './user/user';

class HomeService {
  private $inject: string[] = ['$http'];
  constructor(private $http: IHttpService) {}
  public fetchData(): IHttpPromise<Product[]> {
    return this.$http.get<Product[]>(
      'https://mocki.io/v1/8c907132-60d6-4ec6-a908-3baf152d2d37'
    );
  }
}
export { HomeService };
