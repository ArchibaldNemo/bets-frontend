import angular from 'angular';
import uiRouter from 'angular-ui-router';
import betsHeaderComponent from './betsHeader.component';

let betsHeaderModule = angular.module('betsHeader', [
  uiRouter
])

.component('betsHeader', betsHeaderComponent)

.name;

export default betsHeaderModule;
