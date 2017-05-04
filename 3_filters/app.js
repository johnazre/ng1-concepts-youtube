var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function() {
  this.hello = 'world';

  this.fruits = ['apple', 'orange', 'grape'];

  this.alertMe = function() {
    alert('something');
  }
});

app.filter('makePlural', function() {
  return function(input) {
    return input + "s";
  }
})
