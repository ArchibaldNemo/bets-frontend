import * as betConstants from '../../../data/constants/betsNames';
class HistoryPageController {
  constructor($rootScope, DataService) {
    'ngInject';
    this.$rootScope = $rootScope;
    this.DataService = DataService;
    this.user = this.$rootScope.user;
    this.bets = [];
    this.betsNames = betConstants.BETS_NAMES;
    this.statusNames = betConstants.STATUS_NAMES;
  }

  $onInit() {
    this.loadHistoryBetsData();
  }

  loadHistoryBetsData() {
    this.DataService.getBetsByUserId(this.user.userId).then(result => {
      console.log('RESULT===', result);
      this.bets = result;
    });
  }
}

export default HistoryPageController;
