import angular from 'angular';
import uiRouter from 'angular-ui-router';
import accountPageComponent from './accountPage.component';

let accountPageModule = angular.module('accountPage', [
  uiRouter
])

.component('accountPage', accountPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('accountPage', {
      url: '/my',
      component: 'accountPage',
      data: {
        'noLogin': false
      }
    });
})

.name;

export default accountPageModule;
