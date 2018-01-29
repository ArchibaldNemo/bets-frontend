class HomePageController {
  constructor($state, $rootScope,DataService) {
    'ngInject';
    this.betsData = {};
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.DataService = DataService;
    this.currentSport = null;
    this.currentCountry = null;
    this.user = this.$rootScope.user;
  }

  $onInit() {
    this.loadBetsData();
  }

  loadBetsData() {
    this.DataService.getMatches().then(result => {
      console.log('RESULT===', result);
      this.betsData = result;
      this.currentSport = this.betsData.sports[0];
      this.currentSport.selected = true;
      this.currentCountry = this.currentSport.countries[0];
      this.currentCountry.selected = true;
    });
  }

  onSportSelect(sportItem) {
    this.currentSport.selected = false;
    this.currentSport = sportItem;
    this.currentSport.selected = true;
    this.currentCountry = this.currentSport.countries[0];
    this.currentCountry.selected = true;
  }

  onCountrySelect(countryItem) {
    this.currentCountry.selected = false;
    this.currentCountry = countryItem;
    this.currentCountry.selected = true;
  }

  onBetSelect(bet, match) {
    console.log('BET SELECT!!!===', bet);
    console.log('Match SELECT!!!===', match);
    if(!this.user) {
      alert('Войдите в систему или зарегестрируйтесь чтобы делать ставки!');
      return;
    }
    if(this.user.balanceFree > 0) {
      this.$state.go('betPage', {match},{bet_type : bet});
    } else {
      this.$state.go('noMoneyBetPage');
    }
  }
}

export default HomePageController;
