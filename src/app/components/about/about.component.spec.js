describe('about.component', () => {

  describe('AboutCtrl', () => {
    let componentCtrl;

    beforeEach(() => {
      angular.mock.module('app');

      angular.mock.inject(($componentController) => {
        componentCtrl = $componentController('about', {});
      });
    });

    it('should contain title', () => {
      expect(componentCtrl.title).toBe('About Component');
    });
  });
});
