var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function(mainSvc) {
  var vm = this;
  this.fruits = ['apple', 'orange', 'grape'];

  mainSvc.getPosts().then(function(response) {
    vm.posts = response.data;
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
