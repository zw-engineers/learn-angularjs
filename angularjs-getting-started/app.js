var app = angular.module('plunker', ['ui.router']);

app.controller('MainController', function($scope) { // Controller
    $scope.message = 'World'; // Model
});

app.component("output",{
    bindings: { out: '<' },
    template: `<div>
    <button ng-click="$ctrl.out = $ctrl.out + 1;">buy one</button>
    <button ng-click="$ctrl.out = $ctrl.out + 5;">buy many</button>
  </div>`
});

// TODO : Make npm start the application
app.config(($stateProvider) => {
    var helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    };

    $stateProvider.state(helloState);
});