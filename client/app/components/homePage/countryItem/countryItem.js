import angular from 'angular';
import uiRouter from 'angular-ui-router';
import countryItemComponent from './countryItem.component';

let countryItemModule = angular.module('countryItem', [
  uiRouter
])

.component('countryItem', countryItemComponent)

.name;

export default countryItemModule;
