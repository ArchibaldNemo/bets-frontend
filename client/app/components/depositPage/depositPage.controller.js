class DepositPageController {
  constructor($state,$rootScope, UserService, PaymentService) {
    'ngInject';
    this.$state = $state;
    this.UserService = UserService;
    this.PaymentService = PaymentService;
    this.$rootScope = $rootScope;
    this.user = this.$rootScope.user;
    this.depositData = {};
    this.depositData.paymentType = 'yandex-money'
  }

  createDeposit(depositData) {
    let paymentData = {
      userId : this.$rootScope.userId,
      paymentType : 'AC',
      depositValue : depositData.depositValue
    };

    this.PaymentService.yandexMoneyPay(paymentData).then(result => {
      console.log('PAYMENT RESULT==',result);
    });
    // this.UserService.createDeposit(this.user.userId, depositData).then(result => {
    //   console.log('DEPOSIT RESULT==',result);
    //   if(result.balanceFree) {
    //     this.$rootScope.user.balanceFree = result.balanceFree;
    //     localStorage.removeItem('user');
    //     localStorage.setItem('user', angular.toJson(this.$rootScope.user));
    //   }
    //   this.$state.go('accountPage');
    // });
  }

  onCreateDeposit(formValid) {
    console.log(this.depositData);
    if(!formValid) return;
    this.createDeposit(this.depositData);
  }

  goToPage(pageName)
  {
    this.$state.go(pageName);
  }
}

export default DepositPageController;
