import * as betConstants from '../../../../data/constants/betsNames';
class AdminPageController {
  constructor(DataService,$rootScope) {
    'ngInject';
    this.DataService = DataService;
    this.$rootScope = $rootScope;
    this.user = this.$rootScope.user;
    this.betsNames = betConstants.BETS_NAMES;
    this.bets = {};
    this.deposits = {};
  }

  $onInit() {
    this.getAllBets();
    this.getAllDeposits();
  }

  getAllBets() {
    this.DataService.getBets().
      then((data) => this.bets = data);
  }

  getAllDeposits() {
    this.DataService.getDeposits().
    then((data) => this.deposits = data);
  }
}

export default AdminPageController;
