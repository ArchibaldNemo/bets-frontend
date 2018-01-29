import NoMoneyBetPageModule from './noMoneyBetPage';
import NoMoneyBetPageController from './noMoneyBetPage.controller';
import NoMoneyBetPageComponent from './noMoneyBetPage.component';
import NoMoneyBetPageTemplate from './noMoneyBetPage.html';

describe('NoMoneyBetPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NoMoneyBetPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NoMoneyBetPageController();
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
      expect(NoMoneyBetPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NoMoneyBetPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NoMoneyBetPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NoMoneyBetPageController);
    });
  });
});
