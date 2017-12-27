import BetsFooterModule from './betsFooter';
import BetsFooterController from './betsFooter.controller';
import BetsFooterComponent from './betsFooter.component';
import BetsFooterTemplate from './betsFooter.html';

describe('BetsFooter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BetsFooterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BetsFooterController();
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
      expect(BetsFooterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BetsFooterComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BetsFooterTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BetsFooterController);
    });
  });
});
