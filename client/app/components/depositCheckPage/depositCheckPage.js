import angular from 'angular';
import uiRouter from 'angular-ui-router';
import depositCheckPageComponent from './depositCheckPage.component';

let depositCheckPageModule = angular.module('depositCheckPage', [
  uiRouter
])

.component('depositCheckPage', depositCheckPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('depositCheckPage', {
      url: '/deposit/confirm',
      component: 'depositCheckPage',
      data: {
        'noLogin': false
      }
    });
})

.name;

export default depositCheckPageModule;
