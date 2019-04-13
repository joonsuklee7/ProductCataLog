var dataService = function($http) {
    var result;
    this.getProducts = function(controllerName, methodName, callback) {
        result = $http.get('api/' + controllerName + '/' + methodName).success(
            function(data, status) {
                var event = {
                    result: data,
                    hasErrors: false
                };
                callback(event);
            }).error(
            function(data, status) {
                var event = {
                    result: "",
                    hasErrors: true,
                    error: status
                };
                callback(event);
            }
        );
    };

    this.postProduct = function(controllerName, methodName, obj, callback) {
        result = $http.post('api/' + controllerName + '/' + methodName, obj).success(
            function(data, status) {
                var event = {
                    result: data,
                    hasErrors: false
                };
                callback(event);
            }).error(
            function(data, status) {
                var event = {
                    result: "",
                    hasErrors: true,
                    error: status
                };
                callback(event);
            });
        return result;
    };
};
