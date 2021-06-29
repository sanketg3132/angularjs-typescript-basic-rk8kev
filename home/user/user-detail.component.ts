class UserDetailController {}

const UserDetail = {
  template: require('./user-detail.template.html'),
  controller: UserDetailController,
  bindings: {
    user: '<'
  }
};

export { UserDetail };
