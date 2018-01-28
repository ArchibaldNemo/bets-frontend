class BetsHeaderController {
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

  logout() {
    localStorage.removeItem('user');
    this.$rootScope.user = null;
    this.goToPage('homePage');
  }
}

export default BetsHeaderController;
