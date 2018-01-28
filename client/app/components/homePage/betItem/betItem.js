import angular from 'angular';
import uiRouter from 'angular-ui-router';
import betItemComponent from './betItem.component';

let betItemModule = angular.module('betItem', [
  uiRouter
])

.component('betItem', betItemComponent)

.name;

export default betItemModule;
