import BetPageModule from './betPage';
import BetPageController from './betPage.controller';
import BetPageComponent from './betPage.component';
import BetPageTemplate from './betPage.html';

describe('BetPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BetPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BetPageController();
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
      expect(BetPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BetPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BetPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BetPageController);
    });
  });
});
