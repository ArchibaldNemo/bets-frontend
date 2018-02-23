class DepositPageController {
  constructor($state,$rootScope, UserService) {
    'ngInject';
    this.$state = $state;
    this.UserService = UserService;
    this.$rootScope = $rootScope;
    this.user = this.$rootScope.user;
    this.depositData = {};
    this.depositData.paymentType = 'yandex-money';
    this.yandexPaymentType = 'AC';

  }

  onCreateDeposit(formValid) {
    if(!formValid) return;
  }

  goToPage(pageName)
  {
    this.$state.go(pageName);
  }
}

export default DepositPageController;
