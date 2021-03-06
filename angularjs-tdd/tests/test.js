// Suite
describe('Testing a Hello Pluralsight controller', () => {
    let $controller;

    // Set up for all tests
    beforeEach(module('ItemsApp'));

    beforeEach(
        inject(function(_$controller_) {
            // inject removes the underscores and finds the $controller Provider
            $controller = _$controller_;
        })
    );

    // Test Spec
    it('should say Hello PluralSight', () => {
        var $scope = {};

        // $controller takes an object containing a reference to the $scope
        var controller = $controller('MainCtrl', { $scope : $scope });

        expect($scope.title).toBe('Hello PlralSight');
    });
});