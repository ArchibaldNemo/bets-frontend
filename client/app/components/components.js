import angular from 'angular';
import LoginPage from './loginPage/loginPage';
import HomePage from './homePage/homePage';
import MainPage from './mainPage/mainPage';
import RegistrationPage from './registrationPage/registrationPage';

let componentModule = angular.module('app.components', [
  HomePage,
  RegistrationPage,
  LoginPage,
  MainPage
])

.name;

export default componentModule;
