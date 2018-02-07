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
        headers: { "Content-Type": "application/json"/*,
                  'Authorization': this.$rootScope.user.token*/}})
      .then((response) => {
        console.log('DATA FROM DATABASE = ',response);
        return response.data;
      })
      .catch((error) => console.log('ERROR=', error));
  }

  createBet(betData) {
    return this.$http({
        method: "post",
        url: `${this.hostUrl}/bet`,
        data : betData,
        headers: { "Content-Type": "application/json"/*,
          'Authorization': this.$rootScope.user.token*/}})
      .then((response) => {
        console.log('NEW BET = ',response);
        return response.data;
      })
      .catch((error) => console.log('ERROR=', error));
  }

  getBetsByUserId(userId) {
    return this.$http({
        method: "GET",
        url: `${this.hostUrl}/bets/${userId}`,
        headers: { "Content-Type": "application/json"/*,
         'Authorization': this.$rootScope.user.token*/}
      })
      .then((response) => {
        console.log('DATA FROM DATABASE = ',response);
        return response.data;
      })
      .catch((error) => console.log('ERROR=', error));
  }

  getBets() {
    return this.$http({
        method: "GET",
        url: `${this.hostUrl}/bets`,
        headers: { "Content-Type": "application/json"/*,
          'Authorization': this.$rootScope.user.token*/}
        })
      .then((response) => {
        console.log('DATA FROM DATABASE = ',response);
        return response.data;
      })
      .catch((error) => console.log('ERROR=', error));
  }

  getDeposits() {
    return this.$http({
        method: "GET",
        url: `${this.hostUrl}/deposit`,
        headers: { "Content-Type": "application/json"/*,
         'Authorization': this.$rootScope.user.token*/}
      })
      .then((response) => {
        console.log('DATA FROM DATABASE = ',response);
        return response.data;
      })
      .catch((error) => console.log('ERROR=', error));
  }

}

export default DataService;
