class BetPageController {
  constructor($state, $rootScope) {
    'ngInject';
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.user = this.$rootScope.user;
    this.match = this.$state.params.match;
    console.log(this.$state.params.match);
  }
}

export default BetPageController;
