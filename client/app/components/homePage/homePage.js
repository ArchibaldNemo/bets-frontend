import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homePageComponent from './homePage.component';
import betItem from './betItem/betItem';
import countryItem from './countryItem/countryItem';

let homePageModule = angular.module('homePage', [
  uiRouter, betItem, countryItem
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
