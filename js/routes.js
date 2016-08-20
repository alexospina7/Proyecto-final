angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.home'
      2) Using $state.go programatically:
        $state.go('tabsController.home');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab2/page2
  */
  .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.loginORegistro', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/loginORegistro.html',
        controller: 'loginORegistroCtrl'
      }
    }
  })

  .state('tabsController.perfil', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.producto', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/producto.html',
        controller: 'productoCtrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.olvidContraseA', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/olvidContraseA.html',
        controller: 'olvidContraseACtrl'
      }
    }
  })

  .state('tabsController.registrarme', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/registrarme.html',
        controller: 'registrarmeCtrl'
      }
    }
  })

  .state('tabsController.cerrarSesiN', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/cerrarSesiN.html',
        controller: 'cerrarSesiNCtrl'
      }
    }
  })

  .state('tabsController.eliminarCuenta', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/eliminarCuenta.html',
        controller: 'eliminarCuentaCtrl'
      }
    }
  })

  .state('tabsController.editarPerfil', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/editarPerfil.html',
        controller: 'editarPerfilCtrl'
      }
    }
  })

  .state('tabsController.confirmarEdiciNPerfil', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/confirmarEdiciNPerfil.html',
        controller: 'confirmarEdiciNPerfilCtrl'
      }
    }
  })

  .state('tabsController.bienvenido', {
    url: '/page14',
    views: {
      'tab2': {
        templateUrl: 'templates/bienvenido.html',
        controller: 'bienvenidoCtrl'
      }
    }
  })

  .state('tabsController.editarProducto', {
    url: '/page15',
    views: {
      'tab4': {
        templateUrl: 'templates/editarProducto.html',
        controller: 'editarProductoCtrl'
      }
    }
  })

  .state('tabsController.productoCambiado', {
    url: '/page16',
    views: {
      'tab4': {
        templateUrl: 'templates/productoCambiado.html',
        controller: 'productoCambiadoCtrl'
      }
    }
  })

  .state('tabsController.crearProducto', {
    url: '/page17',
    views: {
      'tab4': {
        templateUrl: 'templates/crearProducto.html',
        controller: 'crearProductoCtrl'
      }
    }
  })

  .state('tabsController.productoCreado', {
    url: '/page18',
    views: {
      'tab4': {
        templateUrl: 'templates/productoCreado.html',
        controller: 'productoCreadoCtrl'
      }
    }
  })

  .state('tabsController.productoEliminado', {
    url: '/page19',
    views: {
      'tab4': {
        templateUrl: 'templates/productoEliminado.html',
        controller: 'productoEliminadoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab1/page2')

  

});