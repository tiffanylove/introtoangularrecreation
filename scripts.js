console.log('test');

 var myApp = angular.module('myApp', []);

 myApp.controller('ourFirstController', function(){

//view model
var vm = this;

vm.thingOne = 'Hey Everyone!';
vm.thingTwo = 'Hey once again!';

vm.name = '';

 });
