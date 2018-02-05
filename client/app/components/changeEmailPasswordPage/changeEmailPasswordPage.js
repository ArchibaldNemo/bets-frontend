import angular from 'angular';
import uiRouter from 'angular-ui-router';
import changeEmailPasswordPageComponent from './changeEmailPasswordPage.component';

let changeEmailPasswordPageModule = angular.module('changeEmailPasswordPage', [
  uiRouter
])

.component('changeEmailPasswordPage', changeEmailPasswordPageComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('changeEmailPasswordPage', {
      url: "/my/change",
      component: 'changeEmailPasswordPage',
      params: {
        emailChange: null,
        passwordChange : null
      },
    });
})

.name;

export default changeEmailPasswordPageModule;
