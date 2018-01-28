import angular from 'angular';
import LoginPage from './loginPage/loginPage';
import HomePage from './homePage/homePage';
import RegistrationPage from './registrationPage/registrationPage';
import AccountPage from './accountPage/accountPage';
import HistoryPage from './historyPage/historyPage';
import DepositPage from './depositPage/depositPage';
import DepositCheckPage from './depositCheckPage/depositCheckPage';
import WithdrawPage from './withdrawPage/withdrawPage';
import AdminPage from './admin/adminPage/adminPage';
import LoadDataPage from './admin/loadDataPage/loadDataPage';


let componentModule = angular.module('app.components', [
  HomePage,
  RegistrationPage,
  LoginPage,
  AccountPage,
  HistoryPage,
  DepositPage,
  DepositCheckPage,
  WithdrawPage,
  AdminPage,
  LoadDataPage
])

.name;

export default componentModule;
