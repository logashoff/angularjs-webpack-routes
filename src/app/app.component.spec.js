describe('app.component', () => {

  describe('AppCtrl', () => {
    let componentCtrl;

    beforeEach(() => {
      angular.mock.module('app');

      angular.mock.inject(($componentController) => {
        componentCtrl = $componentController('app', {});
      });
    });

    it('should contain states for navigation', () => {
      const {states} = componentCtrl;
      expect(states).toBeDefined();
      expect(states.length).toBe(2)
    });
  });
});
