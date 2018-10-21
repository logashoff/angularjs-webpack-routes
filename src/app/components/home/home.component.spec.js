describe('home.component', () => {

  describe('HomeCtrl', () => {
    let componentCtrl;

    beforeEach(() => {
      angular.mock.module('app');

      angular.mock.inject(($componentController) => {
        componentCtrl = $componentController('home', {});
      });
    });

    it('should contain title', () => {
      expect(componentCtrl.title).toBe('Home Component');
    });
  });
});
