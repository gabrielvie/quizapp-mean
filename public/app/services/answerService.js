(function(){
    'user strict';

    angular
        .module('quizerApp')
        .factory('answerService', answerService);

    function answerService($http, $q) {
        var apiUrl = 'http://quizerapp-gabrielvie.c9.io/api/answers',
            service = {};

        service.answers = [];

        service.getAll = function(question) {
            var def = $q.defer();

            $http.get(apiUrl + '/' + question)
                .success(function(response) {
                    service.answers = response.Answers;
                    def.resolve(service.answers);
                })
                .error(function() {
                    def.reject("Failed to get answers");
                });
            return def.promise;
        };

        service.add = function(answers) {
            var def = $q.defer();

            $http.post(apiUrl, answers)
                .success(function(response) {
                    service.answers = response.Answers;
                    def.resolve(service.answers);
                })
                .error(function() {
                    def.reject("Failed to save answers");
                });
            return def.promise;
        };

        return service;
    }
})();