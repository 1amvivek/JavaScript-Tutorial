var app = angular.module("myApp", []);
	app.controller("myNames", function($scope) {
		$scope.names = [
		{name: "Vivek", company: "Fujitsu"},
		{name: "Rahul", company: "Kimberly Clarke"},
		{name: "Teja", company: "Amaravathi"},
		{name: "Arun", company: "Symantec"},
		{name: "Avinash", company: "Adobe"}
		];
		$scope.orderByCol = function(x) {
			$scope.orderByVal = x;
		};
});