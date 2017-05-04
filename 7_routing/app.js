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
      template: '<posts-list></posts-list>'
    })
})

app.controller('mainCtrl', function(mainSvc) {
  var vm = this;
  this.fruits = ['apple', 'orange', 'grape'];
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
