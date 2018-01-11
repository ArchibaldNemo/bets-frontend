import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homePageComponent from './homePage.component';

let homePageModule = angular.module('homePage', [
  uiRouter
])

.component('homePage', homePageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('homePage', {
      url: "/",
      component: 'homePage',
    });
})

.name;

export default homePageModule;
