import WithdrawPageModule from './withdrawPage';
import WithdrawPageController from './withdrawPage.controller';
import WithdrawPageComponent from './withdrawPage.component';
import WithdrawPageTemplate from './withdrawPage.html';

describe('WithdrawPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(WithdrawPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new WithdrawPageController();
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
      expect(WithdrawPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = WithdrawPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(WithdrawPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(WithdrawPageController);
    });
  });
});
