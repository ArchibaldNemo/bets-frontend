class HomePageController {
  constructor($state, $rootScope,DataService) {
    'ngInject';
    this.betsData = {};
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.DataService = DataService;
    this.currentSport = null;
    this.currentCountry = null;
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

  onBetSelect(bet) {
    console.log('BET SELECT!!!===', bet);
  }
}

export default HomePageController;
