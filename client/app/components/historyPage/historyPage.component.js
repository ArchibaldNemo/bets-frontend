import template from './historyPage.html';
import controller from './historyPage.controller';
import './historyPage.scss';

let historyPageComponent = {
  bindings: {
    match : '<'
  },
  template,
  controller
};

export default historyPageComponent;
