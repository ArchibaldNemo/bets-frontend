class DataService {

  constructor($http, $rootScope) {
    'ngInject';
    this.hostUrl = _API_;
    this.$http = $http;
    this.$rootScope = $rootScope;
  }

  getMacthesFromLocal() {
    return this.$http.get('/data/matches.json')
      .then((response) => response.data)
      .catch((error) =>  console.log('XHR Failed for matches.' + error.data));
  }

  getMatches() {
   return this.$http({
        method: "GET",
        url: `${this.hostUrl}/match`,
        headers: { "Content-Type": "application/json" }})
      .then((response) => {
        console.log('DATA FROM DATABASE = ',response);
        return this.parseDataFromDatabase(response.data);
      })
      .catch((error) => console.log('ERROR=', error));
  }

  parseDataFromDatabase(data) {
    let matches = {};
    let elementExist = (dataArray, dataField, value) => {
      return dataArray.some((elem) => elem[dataField] == value)
    };
    matches.sports = [];
    data.forEach((match) => {
      if(!elementExist(matches.sports, 'sport', match.sport)) {
        matches.sports.push({"sport" : match.sport, "countries" : []})
      }
      matches.sports.forEach((sport) => {
        if(sport.sport === match.sport && !elementExist(sport.countries, 'country', match.country)) {
          sport.countries.push({"country" : match.country, "leagues" : []})
        }
        sport.selected = false;
        sport.countries.forEach((country) => {
          if(country.country === match.country && !elementExist(country.leagues, 'league', match.league)) {
            country.leagues.push({"league" : match.league, "matches" : []})
          }
          country.selected = false;
          country.leagues.forEach((league) => {
            league.selected = false;
            if(country.country === match.country && league.league === match.league) {
              let game = {
                "team_1" : match.team_1,
                "team_2" : match.team_2,
                "date" : match.date,
                "time" : match.time,
                "bets" : match.bets
              };
              league.matches.push(game);
            }
          })
        })
      })
    });

    console.log("PARSED OBJECT=", matches);
    return matches;
  }
}

export default DataService;
