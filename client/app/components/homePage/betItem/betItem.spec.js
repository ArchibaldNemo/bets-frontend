import BetItemModule from './betItem';
import BetItemController from './betItem.controller';
import BetItemComponent from './betItem.component';
import BetItemTemplate from './betItem.html';

describe('BetItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BetItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BetItemController();
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
      expect(BetItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BetItemComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BetItemTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BetItemController);
    });
  });
});
