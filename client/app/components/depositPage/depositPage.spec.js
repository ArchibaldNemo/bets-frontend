import DepositPageModule from './depositPage';
import DepositPageController from './depositPage.controller';
import DepositPageComponent from './depositPage.component';
import DepositPageTemplate from './depositPage.html';

describe('DepositPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DepositPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DepositPageController();
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
      expect(DepositPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = DepositPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(DepositPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(DepositPageController);
    });
  });
});
