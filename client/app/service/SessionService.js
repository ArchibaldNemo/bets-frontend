class SessionService {

  constructor($http, $rootScope, $state) {
    'ngInject';
    this.$http = $http;
    this.$rootScope = $rootScope;
    this.$state = $state;
  }

  checkAccess(event, toState, toParams, fromState, fromParams) {
    if (toState.data) {
      if (toState.data.noLogin) {
        // если нужно, выполняйте здесь какие-то действия
        // перед входом без авторизации
      }
      else if(!this.$rootScope.user) {
        event.preventDefault();
        this.$state.go('homePage');
        console.log('Redirect to home page');
      }
    } else {
      if (localStorage.getItem('user')) {
        this.$rootScope.user = angular.fromJson(localStorage.getItem('user'));
        console.log('Get user from local storage');
      }
    }
  }
}

export default SessionService;
