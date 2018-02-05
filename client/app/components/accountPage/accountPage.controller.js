class AccountPageController {
  constructor($state, $rootScope,DataService) {
    'ngInject';
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.DataService = DataService;
    this.user = this.$rootScope.user;
  }

  $onInit() {
    this.loadHistoryBetsData();
  }

  loadHistoryBetsData() {
    this.DataService.getBetsByUserId(this.user.userId).then(result => {
      this.bets = result.filter((bet) => bet.status === 'active');
      console.log('RESULT===', this.bets);
    });
  }

  goToPage(pageName, params = null)
  {
    console.log('PARAMS FROM ACCOUNT PAGE===',params);
    this.$state.go(pageName, params);
  }
}

export default AccountPageController;
