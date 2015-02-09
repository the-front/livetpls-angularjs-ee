# livetpls-angularjs-ee : Live Templates


## JavaScript
> templateSet group name: ng_ee_javascript

`iife` - JavaScript IIFE

```javascript
(function() {
  'use strict';

  $SELECTION$$END$

})();
```

## Require.js
> templateSet group name: ng_ee_requirejs

`rload` - require.js load modules

```javascript
define(function(require) {
  'use strict';

  $END$

});
```

`rdef` - require.js define module

```javascript
define(function(require) {
  'use strict';

  var module = {};$END$

  return module;

});
```

`rcall` - require('module/path/file')

```javascript
require('$path$')$END$
```

`rconf` - require.js config

```javascript
require({

  // libraries dependencies (fallback support)
  paths: {

    $lib$: [
      'vendor/$lib$.min'
    ]$END$
  
  },
  
  // define js scripts dependencies
  shim: {
  
    /*
    '$lib$': {
      deps: [],
      exports: ''
    }
    */
  
  },
  
  priority: [
    '$lib$'
  ],

  deps: ['./start$mainjs$']

});
```

## Angular.js Enterprise Edition
> templateSet group name: ng_ee_global

`ng_ee_module_use` - angular.js ee module use

```javascript
define(function(require) {
  'use strict';

  var module = require('$path$/module');

  module.$SELECTION$$END$

});
```

`ng_ee_module` - angular.js ee define module

```javascript
define(function(require) {
  'use strict';

  var angular = require('angular');
  // require('angularResource');

  // require('uiRouter');
  // require('uiBootstrap');

  // angular module definition
  return angular.module(
    // module name
    '$moduleName$',

    // module dependencies
    [
      // 'ngResource',

      // 'ui.router',
      // 'ui.bootstrap',

      $END$
    ]
  );

});
```

`ng_ee_package` - angularjs ee package

```javascript
define(function(require) {
  'use strict';

  var module = require('./module');
  require('./resource');
  require('./controller');
  require('./$routesStates$');

  return module;$END$

});
```

`ng_ee_bootstrap` - angular.js ee bootstrap app

```javascript
define(function(require) {
  'use strict';

  var angular = require('angular');

  angular.element(document).ready(startAngularApp);

  //---

  function startAngularApp() {

    console.log('start angular application');

    // define angular module to bootstrap application
    var module = angular.module(
      // module name
      '$moduleName$',

      // module dependencies
      [
        // enable mock and intercep requests
        require('./require.mock.load').name,$END$

        require('app/$mainPackage$/package').name
      ]
    );

    // start angular app
    angular.bootstrap(document, [module.name]);

  }

});
```

## Angular.js
> templateSet group name: ng_ee_angularjs

`ng_module_get` - angular.js get module

```javascript
angular.module('$moduleName$');$END$
```

`ng_module_set` - angular.js set module

```javascript
angular.module('$moduleName$', [
  $moduleDependencies$
]);$END$
```

`ng_directive_long` - angular.js directive long

```javascript
directive('$directiveName$', $directiveName$);

//---
$comment$

$directiveName$.$inject = [ $deps$ ];

function $directiveName$( $params$ ) {

  var scope = {
    max: '='
  };$END$

  var directive = {
    restrict: '$restrict$',
    scope: scope,

    controller: ControllerFn,
    controllerAs: '$controllerAs$',
    // So our isolated scope will be stored
    // on the `this` context of our controller
    // instead of 
    bindToController: true,

    link: linkingFn,

    template: templateFn,
    templateUrl: templateUrlFn
  };

  return directive;

  //---

  ControllerFn.$inject = [ $ctrlDeps$ ];

  function ControllerFn( $ctrlParams$ ) {
    var vm = this;

    vm.min = 3; 
    console.log('CTRL: vm.min = %i', vm.min);
    console.log('CTRL: vm.max = %i', vm.max);
  }

  //---

  function linkingFn(scope, el, attr, ctrl) {
    console.log('LINK: scope.max = %i', scope.max);
    console.log('LINK: scope.vm.min = %i', scope.vm.min);
    console.log('LINK: scope.vm.max = %i', scope.vm.max);
  }

  //---

  function templateFn(tElement, tAttrs) {
    return [
      '<div>min: {{vm.min}} :: max: {{vm.max}}</div>'
    ].join('');
  }

  //---

  function templateUrlFn(tElement, tAttrs) {
    return 'path/directive/template.html';
  }

}
```

`ng_directive` - angular.js directive short

```javascript
directive('$directiveName$', $directiveName$);

//--- $comment$

function $directiveName$() {

  var directive = {
    restrict: '$restrict$',
    link: $linkingFn$
  };

  return directive;

  //---

  function $linkingFn$(scope, element, attrs) {

    // TODO: define code
    $END$

  }

}
```

`ng_controller` - angular.js controller

```javascript
controller('$controllerName$Ctrl', $controllerName$Ctrl);

//---

$controllerName$Ctrl.$inject = [ $deps$ ];

function $controllerName$Ctrl( $params$ ) {
  var vm = this;

  // TODO: define vm (ViewModel) attribures
  $END$

  //---

  // TODO: define internal processing code

}
```

`ng_factory` - angular.js factory

```javascript
factory('$factoryName$', $factoryName$);

//---

$factoryName$.$inject = [ $deps$ ];

function $factoryName$( $params$ ) {

  var service = {
    attr: 'value',
    func: hiddenFunction$END$
  };

  return service;

  //---

  function hiddenFunction() {
    
    // TODO: define

  }

}
```

`ng_service` - angular.js service

```javascript
service('$serviceName$', $serviceName$);

//---

$serviceName$.$inject = [ $deps$ ];

function $serviceName$( $params$ ) {
  var service = this;

  // TODO: review
  service.att = 'value';
  service.privateFunc = privateFunc;

  //TODO: define code
  $END$

  //---

  function privateFunc() {
    return 'hello external world';
  }

}
```

`ng_provider` - angular.js provider

```javascript
provider('$providerName$', $providerName$);

//--- $comment$

function $providerName$() {
  
  this.$get = $providerName$Get;

  //---

  $providerName$Get.$inject = [ $deps$ ];

  function $providerName$Get( $params$ ) {
    return {$END$};
  }

}
```

`ng_decorator` - angular.js $provide.decorator

```javascript
decorator('$toDecorate$', $toDecorate$Decorator);

//--- $comment$

$toDecorate$Decorator.$inject = [ '$delegate' ];

function $toDecorate$Decorator( $$delegate ) {
  
  // TODO: define decorator
  $END$

  return $$delegate;
}
```

`ng_filter` - angular.js filter

```javascript
filter('$filterName$', $filterName$);

//--- $comment$

function $filterName$() {

  return function(input, $configValue$) {
    input = input || '';
    var out = '';

    // TODO: define filter process code$END$

    return out;
  };

}
```

`ng_run` - angular.js run

```javascript
run($runner$);

//---

$runner$.$inject = [ $deps$ ];

function $runner$( $params$ ) {

  // TODO: define code
  $END$

}
```

`ng_config` - angular.js config

```javascript
config($configure$);

//---

$configure$.$inject = [ $deps$ ];

function $configure$( $params$ ) {

  // TODO: define code
  $END$

}
```

`ng_value` - angular.js value

```javascript
value('$name', $value$);$END$
```

`ng_constant` - angular.js constant

```javascript
constant('$name', $value$);$END$
```

`ng_module` - angular.js module

```javascript
module(
  // module name
  '$moduleName$',

  // module dependencies
  [
    $END$
  ]
);
```

## Angular.js ngResource
> templateSet group name: ng_ee_angularjs_resource

`ng_resource` - angular.js ngResource

```javascript
factory('$name$Resource', $name$Resource);

//--- $comment$

$fnName$Resource.$inject = [ '$resource'$deps$ ];

function $fnName$Resource( $$resource$params$ ) {

  return $$resource(
    '$url_rest$/$url_resource$'
  );$END$

}
```

`ng_resource_id` - angular.js ngResource with id

```javascript
factory('$name$Resource', $name$Resource);

//--- $comment$

$fnName$Resource.$inject = [ '$resource'$deps$ ];

function $fnName$Resource( $$resource$params$ ) {

  return $$resource(
    '$url_rest$/$url_resource$/:id',
    {
      'id': ''
    },
    {
      'update': { 'method': 'PUT' }
    }
  );$END$

}
```

## Angular.js ngRoute
> templateSet group name: ng_ee_angularjs_route

`ng_routeProvider_otherwise` - angular.js ngRoute otherwise

```javascript
otherwise({ redirectTo: '/$route$' })$END$
```

`ng_routeProvider_when` - angular.js ngRoute when

```javascript
when(
  '/$route$',
  {
    templateUrl   : '$path$.html',
    controller    : '$controllerName$Ctrl',
    controllerAs  : '$controllerAs$'
  }
)$END$
```

`ng_routeProvider_configure` - angular.js ngRoute configure $routeProvider

```javascript
config(configureRoutes);

//--- $comment$

configureRoutes.$inject = [ '$routeProvider'$deps$ ];

function configureRoutes( $$routeProvider$params$ ) {

  $routeProvider
    .when(
      '/$route$',
      {
        templateUrl   : '$path$.html',
        controller    : '$controllerName$Ctrl',
        controllerAs  : '$controllerAs$'
      }
    )$END$;

}
```

## Angular UI Router
> templateSet group name: ng_ee_ui_router

`ng_urlRouterProvider_otherwise` - angular uiRouter urlRouterProvider otherwise

```javascript
otherwise('/$redirectTo$')$END$
```

`ng_urlRouterProvider_when` - angular uiRouter urlRouterProvider when

```javascript
when('$from$', '/$to$')$END$
```

`ng_urlRouterProvider` - angular uiRouter configure urlRouterProvider

```javascript
$$urlRouterProvider
  .when('$from$', '/$to$')
  .otherwise("/$redirectTo$")$END$;
```

`ng_stateProvider_state` - angular uiRouter state

```javascript
state('$name$.$substate$', {
  url: '/$substate$',
  views: {
    'content@$name$': {
      templateUrl   : '$templatePath$.html',
      controller    : '$controllerName$Ctrl',
      controllerAs  : '$controllerAs$'
    }
  }
})$END$
```

`ng_stateProvider_configure` - angular uiRouter configure stateProvider

```javascript
config(configureStates);

//--- $comment$

configureStates.$inject = [ '$stateProvider', '$urlRouterProvider'$deps$ ];

function configureStates( $$stateProvider, $$urlRouterProvider$params$ ) {

  $$urlRouterProvider
    .when('', '/$state$') // default
    .when('/', '/$state$') // default
    .otherwise('/404'); // For any unmatched url, redirect to /404

  $$stateProvider
    .state('$state$', {
      url: '/$state$',
      views: {
        'master': {
          templateUrl   : '$masterHtmlPath$.html'
        },
        'content@$state$': {
          templateUrl   : '$contentHtmlPath$.html',
          controller    : '$contentControllerName$Ctrl',
          controllerAs  : '$controllerAs$'
        }
      }
    })$END$;

}
```

## Jasmine
> templateSet group name: ng_ee_jasmine

`expecthavebeencalledwith` - Expect(X).toHaveBeenCalledWith(Y)

```javascript
expect( $a$ ).toHaveBeenCalledWith( $b$ );$END$
```

`expecthavebeencalled` - Expect(X).toHaveBeenCalled()

```javascript
expect( $a$ ).toHaveBeenCalled();$END$
```

`spyoncallfake` - spyOn(Obj, Key).andCallFake(fct)

```javascript
spyOn( $objToSpy$, '$objAttribute$' ).andCallFake( $function$ )$END$
```

`spyonreturn` - spyOn(Obj, Key).andReturn()

```javascript
spyOn( $objToSpy$, '$objAttribute$' ).andReturn( $returnValue$ )$END$
```

`spyonthrough` - spyOn(Obj, Key).andCallThrough()

```javascript
spyOn( $objToSpy$, '$objAttribute$' ).andCallThrough()$END$
```

`spyon` - spyOn(Obj, Key)

```javascript
spyOn( $objToSpy$, '$objAttribute$' )$END$
```

`expectnotthrow` - Expect(X).not.toThrow()

```javascript
expect( $a$ ).not.toThrow();$END$
```

`expectthrow` - Expect(X).toThrow()

```javascript
expect( $a$ ).toThrow();$END$
```

`expectcloseto` - Expect(X).toBeCloseTo(Y, Z)

```javascript
expect( $a$ ).toBeCloseTo( $closeValue$, $precision$ );$END$
```

`expectgeaterthan` - Expect(X).toBeGreaterThan(Y)

```javascript
expect( $a$ ).toBeGreaterThan( $b$ );$END$
```

`expectlessthan` - Expect(X).toBeLessThan(Y)

```javascript
expect( $a$ ).toBeLessThan( $b$ );$END$
```

`expectnotcontain` - Expect(X).not.toContain(Y)

```javascript
expect( $a$ ).not.toContain( $b$ );$END$
```

`expectcontain` - Expect(X).toContain(Y)

```javascript
expect( $a$ ).toContain( $b$ );$END$
```

`expectnottrue` - Expect(X).not.toBeTruthy(Y)

```javascript
expect( $a$ ).not.toBeTruthy();$END$
```

`expectnotfalse` - Expect(X).not.toBeFalsy(Y)

```javascript
expect( $a$ ).not.toBeFalsy();$END$
```

`expectfalse` - Expect(X).toBeFalsy(Y)

```javascript
expect( $a$ ).toBeFalsy();$END$
```

`expecttrue` - Expect(X).toBeTruthy(Y)

```javascript
expect( $a$ ).toBeTruthy();$END$
```

`expectnotnull` - Expect(X).not.toBeNull()

```javascript
expect( $a$ ).not.toBeNull();$END$
```

`expectnull` - Expect(X).toBeNull()

```javascript
expect( $a$ ).toBeNull();$END$
```

`expectnotdefined` - Jasmine expect().not.toBeDefined()

```javascript
expect( $a$ ).not.toBeDefined();$END$
```

`expectnotundefined` - Expect(X).toBeUndefined()

```javascript
expect( $a$ ).not.toBeUndefined();$END$
```

`expectundefined` - Expect(X).toBeUndefined()

```javascript
expect( $a$ ).toBeUndefined();$END$
```

`expectdefined` - Expect(X).toBeDefined()

```javascript
expect( $a$ ).toBeDefined();$END$
```

`expectnotmatch` - Jasmine Expect(X).not.toMatch(Y)

```javascript
expect( $a$ ).not.toMatch( $b$ );$END$
```

`expectmatch` - Expect(X).toMatch(Y)

```javascript
expect( $a$ ).toMatch( $b$ );$END$
```

`expectequal` - Expect(X).toEqual(Y)

```javascript
expect( $a$ ).toEqual( $b$ );$END$
```

`expectnotbe` - Expect(X).not.toBe(Y)

```javascript
expect( $a$ ).not.toBe( $b$ );$END$
```

`expectbe` - Expect(X).toBe(Y)

```javascript
expect( $a$ ).toBe( $b$ );$END$
```

`jasfactory` - Jasmine describe filter

```javascript
describe('$MyFactoryName$', function() {
  var factory;
  
  beforeEach(function () {
    module('$module$', _dependencies_);
    
    inject(function ($injector) {
      factory = $injector.get('$MyFactoryName$');
    });
    
  });

  $END$

});
```

`jasfilter` - Jasmine describe filter

```javascript
describe('$MyFilterName$', function() {
  var $filter, filter;
  
  beforeEach(function () {
    module('$module$', _dependencies_);
    
    inject(function ($injector) {
      $filter = $injector.get('$filter');
      filter = $filter('$MyFilterName$');
    });
    
  });

  $END$

});
```

`jasdirective` - Jasmine describe directive

```javascript
describe('$MyName$', function() {
  var $rootScope,
      $scope,
      $compile,
      el,
      $body = $('body'),
      simpleHtml = '$directiveHtml$';
      
  beforeEach(function () {
    module('$module$', _dependencies_);
    
    inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      $compile = $injector.get('$compile');
      el = $compile(angular.element(simpleHtml))($scope);
    });
    
    $body.append(el);
    $rootScope.$digest();
    
  });
   
  $END$

});
```

`jasctrl` - Jasmine describe controller

```javascript
describe('$MyName$Ctrl', function() {
  var $rootScope,
      $scope,
      controller;
  beforeEach(function () {
    module('$module$', _dependencies_);
    
    inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('$MyName$Ctrl', {$scope. $scope});
    });
    
  });

  $END$

});
```

`jasii` - Jasmine it template with injectables

```javascript
it( '$should$', inject(function( $injectables$ ) {
    $END$
}));
```

`jasb` - beforeEach

```javascript
beforeEach(function(){
  $END$
});
```

`jasbm` - beforEach with AngularJS module

```javascript
beforeEach( module( $moduleName$ ) );$END$
```

`jasbi` - beforeEach with Angular's inject

```javascript
beforeEach(inject(function( _$$rootScope_$other$ ){
  $END$
}));
```

`jasi` - Jasmine it template

```javascript
it( '$should$', function() {
    $END$
});
```

`jasd` - Jasmine describe template

```javascript
describe( '$describe$', function() {
    $END$
});
```