class LoginPageController {
  constructor($state, $http) {
    'ngInject';
    this.hostUrl = _API_;
    this.$state = $state;
    this.$http = $http;
    this.userLogData = {};

    console.log("API=",_API_);
  }

  goToRegistrationPage() {
    this.$state.go('registrationPage');
  }

  goToMainPage() {
    this.$state.go('mainPage');
  }

  onLogin() {
    console.log('userLogData=',this.userLogData);
    this.$http({
        method: "POST",
        url: `${this.hostUrl}/login`,
        dataType: 'json',
        data: {
          "email": this.userLogData.email,
          "password": this.userLogData.password
        },
        headers: { "Content-Type": "application/json" }})
      .then((response) => {
        console.log('TOKEN=', response.data.token);
        if(response.data.token) {
          localStorage.setItem('token', response.data.token);
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
