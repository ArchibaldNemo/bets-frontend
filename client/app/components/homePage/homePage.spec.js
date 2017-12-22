import HomePageModule from './homePage';
import HomePageController from './homePage.controller';
import HomePageComponent from './homePage.component';
import HomePageTemplate from './homePage.html';

describe('HomePage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomePageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomePageController();
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
      expect(HomePageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = HomePageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(HomePageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HomePageController);
    });
  });
});
