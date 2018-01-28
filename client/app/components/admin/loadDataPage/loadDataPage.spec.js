import LoadDataPageModule from './loadDataPage';
import LoadDataPageController from './loadDataPage.controller';
import LoadDataPageComponent from './loadDataPage.component';
import LoadDataPageTemplate from './loadDataPage.html';

describe('LoadDataPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoadDataPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoadDataPageController();
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
      expect(LoadDataPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = LoadDataPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(LoadDataPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(LoadDataPageController);
    });
  });
});
