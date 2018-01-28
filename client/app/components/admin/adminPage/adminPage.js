import angular from 'angular';
import uiRouter from 'angular-ui-router';
import adminPageComponent from './adminPage.component';

let adminPageModule = angular.module('adminPage', [
  uiRouter
])

.component('adminPage', adminPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('adminPage', {
      url: '/admin',
      component: 'adminPage',
      data: {
        'noLogin': false
      }
    });
})

.name;

export default adminPageModule;
