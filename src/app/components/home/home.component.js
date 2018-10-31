import './home.component.scss';
import template from './home.component.html';

class HomeCtrl {
  constructor() {
    this.title = 'Home Component';
  }
}

let homeComponent = {
    template: template,
    controller: HomeCtrl
};

export {homeComponent}
