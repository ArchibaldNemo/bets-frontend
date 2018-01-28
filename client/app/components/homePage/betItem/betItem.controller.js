class BetItemController {
  constructor() {
    'ngInject';
    console.log('Item=', this.match);
    this.showVariants = false;
  }

  onBetClick() {
    console.log('BETS CLICK = COMPONENT!!!!');
  }
}

export default BetItemController;
