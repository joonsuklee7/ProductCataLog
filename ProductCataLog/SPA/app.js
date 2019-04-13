var app = angular.module('app', ['ngRoute']);
app.service('api', ['$http', dataService]);
app.controller("mainController", mainController);
app.controller("productController", productController);

app.config(['$routeProvider','$httpProvider', function ($routeProvider) {
    $routeProvider
        .when("/product", {
            templateUrl: "SPA/Views/product.html",
            controller: "productController"
        })
        .otherwise({
            redirectTo: "/product"
        });
}]);
