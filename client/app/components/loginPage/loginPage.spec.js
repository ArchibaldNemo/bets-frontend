import LoginPageModule from './loginPage';
import LoginPageController from './loginPage.controller';
import LoginPageComponent from './loginPage.component';
import LoginPageTemplate from './loginPage.html';

describe('LoginPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoginPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoginPageController();
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
      expect(LoginPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = LoginPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(LoginPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(LoginPageController);
    });
  });
});
