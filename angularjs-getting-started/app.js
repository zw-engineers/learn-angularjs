var app = angular.module('plunker', []);

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