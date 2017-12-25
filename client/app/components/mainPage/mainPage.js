import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainPageComponent from './mainPage.component';

let mainPageModule = angular.module('mainPage', [
  uiRouter
])

.component('mainPage', mainPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('mainPage', {
      url: '/',
      component: 'mainPage'
    });
})

.name;

export default mainPageModule;
