import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {stateConfig, states} from './app.routing';
import {homeComponent, aboutComponent} from './components'
import template from './app.component.html';
import './app.component.css';

export class AppCtrl {
  constructor() {
    this.states = states;
  }
}

export const appComponent = {
  template: template,
  controller: AppCtrl,
};

const appModule = angular.module('app', [uiRouter]);

appModule
  .config(stateConfig)
  .component('app', appComponent)
  .component('home', homeComponent)
  .component('about', aboutComponent);

export default appModule;
