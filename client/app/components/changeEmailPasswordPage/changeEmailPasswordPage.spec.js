import ChangeEmailPasswordPageModule from './changeEmailPasswordPage';
import ChangeEmailPasswordPageController from './changeEmailPasswordPage.controller';
import ChangeEmailPasswordPageComponent from './changeEmailPasswordPage.component';
import ChangeEmailPasswordPageTemplate from './changeEmailPasswordPage.html';

describe('ChangeEmailPasswordPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ChangeEmailPasswordPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ChangeEmailPasswordPageController();
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
      expect(ChangeEmailPasswordPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ChangeEmailPasswordPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ChangeEmailPasswordPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ChangeEmailPasswordPageController);
    });
  });
});
