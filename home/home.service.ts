import { IHttpPromise, IHttpService, IPromise } from 'angular';
import { User } from './user/user';

class HomeService {
  private $inject: string[] = ['$http'];
  constructor(private $http: IHttpService) {}
  public fetchData(): IHttpPromise<User[]> {
    return this.$http.get<User[]>(
      'https://mocki.io/v1/8c907132-60d6-4ec6-a908-3baf152d2d37'
    );
  }
}
export { HomeService };
