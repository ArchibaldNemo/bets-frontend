import angular from 'angular';
import betsFooter from './betsFooter/betsFooter';
import betsHeader from './betsHeader/betsHeader';

let commonModule = angular.module('app.common', [betsFooter, betsHeader])

.name;

export default commonModule;
