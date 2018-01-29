import angular from 'angular';
import uiRouter from 'angular-ui-router';
import noMoneyBetPageComponent from './noMoneyBetPage.component';

let noMoneyBetPageModule = angular.module('noMoneyBetPage', [
  uiRouter
])

.component('noMoneyBetPage', noMoneyBetPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('noMoneyBetPage', {
      url: '/nomoney',
      component: 'noMoneyBetPage',
      data: {
        'noLogin': false
      }
    });
})


.name;

export default noMoneyBetPageModule;
