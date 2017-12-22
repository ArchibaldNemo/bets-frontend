import MainPageModule from './mainPage';
import MainPageController from './mainPage.controller';
import MainPageComponent from './mainPage.component';
import MainPageTemplate from './mainPage.html';

describe('MainPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MainPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MainPageController();
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
      expect(MainPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MainPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MainPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MainPageController);
    });
  });
});
