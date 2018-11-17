# AngularJS Getting Started

## Two requirements

* Add an `<script>` tag pointing to angular.js

```html
<script src="angular.js"></script>
```

* Add an `ng-app` attribute in your HTML.
    * `ng-app` is a _directive_.
    * The `ng` is short for _angular_.
    
```html
<div ng-app>
    This area controlled by Angular!
</div>
```

## Controllers

* In Angular a controller is in charge of building a model.
* A Model contains the data we need to work with and a controller
will do whatever it need to grab that data..

### Controller Basics

There are 4 basic facts about controllers in Angular:

* Controller directive in _HTML_ `(ng-controller)`.
    * This is an attribute that we place in our HTML. 
    
    ```html
    <div ng-app>
        <div ng-controller="MainController">
          
        </div>
    </div>
    ```

    * Just like `ng-app` is a directive, `ng-controller` is also
    a directive.
    * in the snipet above, `Angular` will initialise from the `ng-app`
    directive and control everything within that div.
    * When we use the `ng-controller` _directive_ we can specify the name of
    the _controller_ we want to control the section or part of that
    HTML. In the example above, the `MainController` will be the 
    name of the controller which will control the section between
    the `<div>` with the directive `ng-controller`.
* Controller will be a function that Angular invokes.
    ```javascript 1.8
    var MainController = function($scope) {
      $scope.message = 'Hello!';
    }
    ```
* Controller takes a `$scope` parameter.
* Attach model to `$scope`.