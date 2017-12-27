class BetsHeaderController {
  constructor($state, $rootScope) {
    'ngInject';
    this.$state = $state;
    this.$rootScope = $rootScope;
  }

  goToPage(pageName)
  {
    this.$state.go(pageName);
  }

  logout() {
    localStorage.removeItem('token');
    this.$rootScope.user = {'logged' : false};
    this.goToPage('homePage');
  }

}

export default BetsHeaderController;
