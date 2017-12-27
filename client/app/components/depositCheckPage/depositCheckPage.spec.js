import DepositCheckPageModule from './depositCheckPage';
import DepositCheckPageController from './depositCheckPage.controller';
import DepositCheckPageComponent from './depositCheckPage.component';
import DepositCheckPageTemplate from './depositCheckPage.html';

describe('DepositCheckPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DepositCheckPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DepositCheckPageController();
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
      expect(DepositCheckPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = DepositCheckPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(DepositCheckPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(DepositCheckPageController);
    });
  });
});
