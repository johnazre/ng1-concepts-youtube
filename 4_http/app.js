var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function($http) {
  var vm = this;
  this.fruits = ['apple', 'orange', 'grape'];

  $http.get('https://jsonplaceholder.typicode.com/posts').then(function(response) {
    vm.posts = response.data;
  })
});

app.filter('makePlural', function() {
  return function(input) {
    return input + "s";
  }
})
