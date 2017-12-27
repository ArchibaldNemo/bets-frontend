class DepositPageController {
  constructor($state) {
    'ngInject';
    this.$state = $state;

  }

  goToPage(pageName)
  {
    this.$state.go(pageName);
  }
}

export default DepositPageController;
