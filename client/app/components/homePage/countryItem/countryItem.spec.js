import CountryItemModule from './countryItem';
import CountryItemController from './countryItem.controller';
import CountryItemComponent from './countryItem.component';
import CountryItemTemplate from './countryItem.html';

describe('CountryItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CountryItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CountryItemController();
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
      expect(CountryItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = CountryItemComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CountryItemTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CountryItemController);
    });
  });
});
