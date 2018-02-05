import * as betConstants from '../../../../data/constants/betsNames';

class BetPageController {
  constructor($state, $rootScope, DataService) {
    'ngInject';
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.DataService = DataService;
    this.betsNames = betConstants.BETS_NAMES;
    this.betValue = '';
    this.user = this.$rootScope.user;
  }

  $onInit() {
    this.user = this.$rootScope.user;
    this.match = this.$state.params.match;
    this.betType = this.$state.params.bet_type;
  }

  onBetClick() {
    console.log(this.user);
    let betData =  {
      userId: this.user.userId,
      match: this.match,
      betValue : this.betValue,
      betType : this.betType
    }
    this.DataService.createBet(betData).then(result => {
      if(result.balanceFree && result.balanceGame) {
        this.$rootScope.user.balanceFree = result.balanceFree;
        this.$rootScope.user.balanceGame = result.balanceGame;
        localStorage.removeItem('user');
        localStorage.setItem('user', angular.toJson(this.$rootScope.user));

      }
        this.$state.go('historyPage');
    })
    .catch((error) => {
      console.log('ERROR=', error);
      this.$state.go('homePage');
    });
  }
}

export default BetPageController;
