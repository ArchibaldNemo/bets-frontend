import angular from 'angular';
import uiRouter from 'angular-ui-router';
import depositPageComponent from './depositPage.component';

let depositPageModule = angular.module('depositPage', [
  uiRouter
])

.component('depositPage', depositPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('depositPage', {
      url: '/',
      component: 'depositPage'
    });
})

.name;

export default depositPageModule;
