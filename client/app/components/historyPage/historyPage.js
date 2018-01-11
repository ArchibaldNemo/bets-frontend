import angular from 'angular';
import uiRouter from 'angular-ui-router';
import historyPageComponent from './historyPage.component';

let historyPageModule = angular.module('historyPage', [
  uiRouter
])

.component('historyPage', historyPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('historyPage', {
      url: '/history',
      component: 'historyPage',
      data: {
        'noLogin': false
      }
    });
})

.name;

export default historyPageModule;
