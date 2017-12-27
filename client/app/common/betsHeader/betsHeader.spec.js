import BetsHeaderModule from './betsHeader';
import BetsHeaderController from './betsHeader.controller';
import BetsHeaderComponent from './betsHeader.component';
import BetsHeaderTemplate from './betsHeader.html';

describe('BetsHeader', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BetsHeaderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BetsHeaderController();
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
      expect(BetsHeaderTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BetsHeaderComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BetsHeaderTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BetsHeaderController);
    });
  });
});
