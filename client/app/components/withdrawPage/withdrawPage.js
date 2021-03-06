import angular from 'angular';
import uiRouter from 'angular-ui-router';
import withdrawPageComponent from './withdrawPage.component';

let withdrawPageModule = angular.module('withdrawPage', [
  uiRouter
])

.component('withdrawPage', withdrawPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('withdrawPage', {
      url: '/withdraw',
      component: 'withdrawPage',
      data: {
        'noLogin': false
      }
    });
})


.name;

export default withdrawPageModule;
