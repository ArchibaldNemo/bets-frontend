import angular from 'angular';
import LoginPage from './loginPage/loginPage';
import HomePage from './homePage/homePage';
import MainPage from './mainPage/mainPage';
import RegistrationPage from './registrationPage/registrationPage';
import AccountPage from './accountPage/accountPage';
import HistoryPage from './historyPage/historyPage';
import DepositPage from './depositPage/depositPage';
import DepositCheckPage from './depositCheckPage/depositCheckPage';
import WithdrawPage from './withdrawPage/withdrawPage';


let componentModule = angular.module('app.components', [
  HomePage,
  RegistrationPage,
  LoginPage,
  MainPage,
  AccountPage,
  HistoryPage,
  DepositPage,
  DepositCheckPage,
  WithdrawPage
])

.name;

export default componentModule;
