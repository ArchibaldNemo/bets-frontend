import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginPageComponent from './loginPage.component';

let loginPageModule = angular.module('loginPage', [
  uiRouter
])

.component('loginPage', loginPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('loginPage', {
      url: '/login',
      component: 'loginPage'
    });
})

.name;

export default loginPageModule;
