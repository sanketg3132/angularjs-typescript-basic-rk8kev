import { IComponentOptions, IController } from 'angular';

class ChildController implements IController {
  private name: string = 'Child';
  private id: number = 1;
  private onCallParentCallback: () => (id: number) => void;

  public callParent() {
    console.log('called from child component');
    this.onCallParentCallback()(this.id);
    this.id++;
  }
}

const ChildComponent: IComponentOptions = {
  controller: ChildController,
  template: require('./child.template.html'),
  bindings: {
    inputName: '<',
    onCallParentCallback: '&'
  }
};

export { ChildComponent };
