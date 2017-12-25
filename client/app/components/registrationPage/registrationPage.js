import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registrationPageComponent from './registrationPage.component';

let registrationPageModule = angular.module('registrationPage', [
  uiRouter
])

.component('registrationPage', registrationPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('registrationPage', {
      url: '/',
      component: 'registrationPage'
    });
})

.name;

export default registrationPageModule;
