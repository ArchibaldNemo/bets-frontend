class UserService {

  constructor($http, $rootScope) {
    'ngInject';
    this.hostUrl = _API_;
    this.$http = $http;
    this.$rootScope = $rootScope;
  }

  getUserById(userId) {
    return this.$http({
        method: "GET",
        url: `${this.hostUrl}/user/${userId}`,
        dataType: 'json',
        headers: { "Content-Type": "application/json"}})
      .then((response) => {
        console.log('USER BY ID=', response);
        return response.data.user;
      })
      .catch((error) => alert(error.data));
  }

  updateUser(userId, userData) {
    return this.$http({
        method: "PUT",
        url: `${this.hostUrl}/user/${userId}`,
        dataType: 'json',
        data: userData,
        headers: { "Content-Type": "application/json"}})
      .then((response) => {
        console.log('USER UPDATED=', response);
        return response;
      })
      .catch((error) => alert(error.data));
  }

  createDeposit(userId,depositData) {
    return this.$http({
        method: "post",
        url: `${this.hostUrl}/deposit/${userId}`,
        data : depositData,
        headers: { "Content-Type": "application/json"/*,
         'Authorization': this.$rootScope.user.token*/}})
      .then((response) => {
        console.log('NEW DEPOSIT = ',response);
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

}

export default UserService;
