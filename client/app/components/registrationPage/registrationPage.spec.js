import RegistrationPageModule from './registrationPage';
import RegistrationPageController from './registrationPage.controller';
import RegistrationPageComponent from './registrationPage.component';
import RegistrationPageTemplate from './registrationPage.html';

describe('RegistrationPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RegistrationPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RegistrationPageController();
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
      expect(RegistrationPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = RegistrationPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(RegistrationPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(RegistrationPageController);
    });
  });
});
