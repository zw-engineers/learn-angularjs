// Suite
describe('Testing a Hello Pluralsight controller', () => {
    var $controller;

    // Set up for all tests
    beforeEach( () => {
        // Loads the app module
        module('ItemsApp');
        inject( (_$controller_) => {
            // inject removes the underscores and finds the $controller Provider
            $controller = _$controller_;
        });
    })
});