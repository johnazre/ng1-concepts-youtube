var app = angular.module('firstAngularApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('posts', {
      url: '/posts',
      template: '<ui-view></ui-view>'
    })
    .state('posts.incomplete', {
      url: '/incomplete',
      template: '<posts-list posts="vm.incompletePosts"></posts-list>',
      controllerAs: 'vm'
    })
    .state('posts.complete', {
      url: '/complete',
      template: '<posts-list posts="vm.completePosts"></posts-list>',
      controllerAs: 'vm'
    })
})

app.controller('mainCtrl', function(mainSvc) {
  var vm = this;
  this.fruits = ['apple', 'orange', 'grape'];
  mainSvc.getPosts().then(res => {
    this.incompletePosts = res.data.splice(0, 50)
    this.completePosts = res.data;
  })
});

app.filter('makePlural', function() {
  return function(input) {
    return input + "s";
  }
})

app.service('mainSvc', function($http) {
  this.getPosts = function() {
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  };
})
