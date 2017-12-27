import angular from 'angular';
import uiRouter from 'angular-ui-router';
import betsFooterComponent from './betsFooter.component';

let betsFooterModule = angular.module('betsFooter', [
  uiRouter
])

.component('betsFooter', betsFooterComponent)

.name;

export default betsFooterModule;
