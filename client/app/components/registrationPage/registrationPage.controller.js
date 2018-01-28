class RegistrationPageController {
  constructor($state, $http) {
    'ngInject';
    this.hostUrl = _API_;
    this.$state = $state;
    this.$http = $http;
    this.userRegData = {};
  }

  goToLoginPage() {
    this.$state.go('loginPage');
  }

  onRegister(isValid) {
    if(!isValid) return;
    this.$http({
      method: "POST",
      url: `${this.hostUrl}/user`,
      dataType: 'json',
      data: { "firstName": this.userRegData.firstName,
              "lastName": this.userRegData.lastName,
              "fathersName": this.userRegData.fathersName,
              "phone": this.userRegData.phone,
              "email": this.userRegData.email.toLowerCase(),
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
