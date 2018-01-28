import template from './betItem.html';
import controller from './betItem.controller';
import './betItem.scss';

let betItemComponent = {
  bindings: {
    match : '<',
    onBetSelect : '&'
  },
  template,
  controller
};

export default betItemComponent;
