class LoginPageController {
  constructor($state, $http, $rootScope) {
    'ngInject';
    this.hostUrl = _API_;
    this.$state = $state;
    this.$http = $http;
    this.userLogData = {};
    this.$rootScope = $rootScope;
  }

  goToRegistrationPage() {
    this.$state.go('registrationPage');
  }

  goToMainPage() {
    this.$state.go('homePage');
  }

  onLogin(isValid) {
    if(!isValid) return;
    this.$http({
        method: "POST",
        url: `${this.hostUrl}/login`,
        dataType: 'json',
        data: {
          "email": this.userLogData.email.toLowerCase(),
          "password": this.userLogData.password
        },
        headers: { "Content-Type": "application/json" }})
      .then((response) => {
        console.log('TOKEN=', response.data.token);
        if(response.data.token) {
          let user = {
            'token' : response.data.token,
            'logged' : true
          }
          localStorage.setItem('user', angular.toJson(user));
          this.$rootScope.user = user;

          this.goToMainPage();
        }
        else {
          alert('Такого пользователя не существует!');
        }

      })
      .catch((error) => console.log('ERROR=', error));
  }


}

export default LoginPageController;
