import AccountPageModule from './accountPage';
import AccountPageController from './accountPage.controller';
import AccountPageComponent from './accountPage.component';
import AccountPageTemplate from './accountPage.html';

describe('AccountPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AccountPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AccountPageController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AccountPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AccountPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AccountPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AccountPageController);
    });
  });
});
