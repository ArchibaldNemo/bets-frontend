import angular from 'angular';
import uiRouter from 'angular-ui-router';
import betPageComponent from './betPage.component';

let betPageModule = angular.module('betPage', [
  uiRouter
])

.component('betPage', betPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('betPage', {
      url: '/bet',
      component: 'betPage',
      data: {
        'noLogin': false
      },
      params: {
        match: null,
        bet_type : ''
      },
    });
})

.name;

export default betPageModule;
