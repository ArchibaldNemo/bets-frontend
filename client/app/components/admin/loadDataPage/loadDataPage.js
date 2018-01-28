import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loadDataPageComponent from './loadDataPage.component';

let loadDataPageModule = angular.module('loadDataPage', [
  uiRouter
])

.component('loadDataPage', loadDataPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('loadDataPage', {
      url: '/admin/dataload',
      component: 'loadDataPage',
      data: {
        'noLogin': false
      }
    });
})

.name;

export default loadDataPageModule;
