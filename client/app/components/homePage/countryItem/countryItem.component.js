import template from './countryItem.html';
import controller from './countryItem.controller';
import './countryItem.scss';

let countryItemComponent = {
  bindings: {
    countryItem : '<',
    onCountrySelect : '&',
    onLeagueSelect : '&',
    selected : '<'
  },
  template,
  controller
};

export default countryItemComponent;
