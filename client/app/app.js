import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import materialize from 'angular-materialize';
import SessionService from './service/SessionService';
import 'angular-ui-router/release/stateEvents';
//import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    materialize,
    'ui.router.state.events'

  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .run(($rootScope, $state, $stateParams, SessionService) => {
    "ngInject";
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    
    $rootScope.$on('$stateChangeStart',
      (event, toState, toParams, fromState, fromParams) =>
      {
        SessionService.checkAccess(event, toState, toParams, fromState, fromParams);
      }
    );
  })
  .service('SessionService', SessionService)

  .component('app', AppComponent);

