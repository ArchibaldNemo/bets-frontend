class HomePageController {
  constructor($state) {
    'ngInject';
    this.$state = $state;
  }

  goToLoginPage() {
    this.$state.go('loginPage');
  }

  goToRegistrationPage() {
    this.$state.go('registrationPage');
  }
}

export default HomePageController;
