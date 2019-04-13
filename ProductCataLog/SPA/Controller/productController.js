var productController = function ($scope, api) {
    $scope.products = [];

    $scope.openModalToAdd = function() {
        $('#addProductModal').show();
    };

    function loadProductionLists() {
        api.getProducts("Product","GetProducts",
            function(event) {
                if (event.hasErrors === true) {
                    alert("Error getting products:" + event.error);
                } else {
                    $scope.products = event.result;
                }
            });
    }

    loadProductionLists();

    $scope.addProduct = function (newProduct) {
        if (newProduct && newProduct.name && $scope.products
            && $scope.products.find(item => item.name.toUpperCase() === newProduct.name.toUpperCase())) {
            alert("The same name is alreay exist");
        }
        else if (!newProduct || (!newProduct.name && !newProduct.quantity) ) {
            alert("Please provide name and quantity to add");
        }
        else if (newProduct.name && !newProduct.quantity) {
            alert("Please provide quantity to add");
        }
        else if (!newProduct.name && newProduct.quantity) {
            alert("Please provide name to add");
        }
        
        else {
            api.postProduct("Product",
                "PostProduct",
                newProduct,
                function (event) {
                    if (event.hasErrors === true) {
                        alert("Error posting product:" + event.error);
                    } else {
                        $scope.products.push(event.result[0]);
                        $('#addProductModal').hide();
                        alert("posting product sucess:");
                    }
                });
        }
    };

    $scope.cancelModal = function () {
        $('#addProductModal').hide();
    };
};

productController.$inject = ['$scope', 'api'];

