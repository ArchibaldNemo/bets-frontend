class RegistrationPageController {
  constructor($state, $http) {
    'ngInject';
    this.$state = $state;
    this.$http = $http;
    this.userRegData = {};
  }

  goToLoginPage() {
    this.$state.go('loginPage');
  }

  onRegister() {
    this.$http({
      method: "POST",
      url: 'http://localhost:3111/user',
      dataType: 'json',
      data: { "firstName": this.userRegData.firstName,
              "lastName": this.userRegData.lastName,
              "fathersName": this.userRegData.fathersName,
              "phone": this.userRegData.phone,
              "login": this.userRegData.login,
              "email": this.userRegData.email,
              "password": this.userRegData.password},
      headers: { "Content-Type": "application/json" }})
    .then((response) => {
      console.log('data=',response);
      this.goToLoginPage();
    })
    .catch((error) => console.log('ERROR=', error));
  }
}

export default RegistrationPageController;
