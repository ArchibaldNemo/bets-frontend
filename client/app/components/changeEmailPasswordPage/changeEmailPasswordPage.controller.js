class ChangeEmailPasswordPageController {
  constructor($state, $rootScope, UserService) {
    'ngInject';
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.UserService = UserService;
    this.user = this.$rootScope.user;
    this.userChangeData = {};
  }

  $onInit() {
    this.user = this.$rootScope.user;
    console.log('User ====',this.user);
    this.emailChange = this.$state.params.emailChange;
    this.passwordChange = this.$state.params.passwordChange;
    if(this.emailChange) {
      this.userChangeData.email = this.user.email;
    }
  }

  updateUserData(userData) {
    this.UserService.updateUser(this.user.userId, userData).then(result => {
      if(result.data.newEmail) {
        this.$rootScope.user.email = result.data.newEmail;
      }
      this.$state.go('accountPage');
    });
  }

  onChangeUserData(formValid) {
    console.log(this.userChangeData);
    if(!formValid) return;
    if(this.passwordChange && this.userChangeData.password !== this.userChangeData.repPassword) {
        alert('Вы ошиблись в вводе нового пароля! Повторите ввод.');
        return;
    }
    this.updateUserData(this.userChangeData);
  }
}

export default ChangeEmailPasswordPageController;
