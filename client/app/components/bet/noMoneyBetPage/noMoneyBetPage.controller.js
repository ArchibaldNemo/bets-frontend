class NoMoneyBetPageController {
  constructor($state, $rootScope) {
    'ngInject';
    this.$state = $state;
    this.$rootScope = $rootScope;
  }

  goToPage(pageName)
  {
    console.log('PAGE NAME=',pageName);
    this.$state.go(pageName);
  }
}

export default NoMoneyBetPageController;
