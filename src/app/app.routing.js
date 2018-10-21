const states = [{
  name: 'home',
  url: '/',
  template: '<home></home>',
  data: {
    title: 'Home'
  }
}, {
  name: 'about',
  url: '/about',
  template: '<about></about>',
  data: {
    title: 'About'
  }
}];

const stateConfig = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
  states.forEach(state => $stateProvider.state(state));
};

export {stateConfig, states};
