(function() {
    'use strict';
    
    angular
        .module('quizerApp')
        .factory('questionsService', questionsService);
        
    function questionsService($http, $q) {
        var questionsFactory = {};

        questionsFactory.get = function(id) {
            return $http.get('/api/questoes/' + id);
        };

        questionsFactory.all = function(tema_id) {
            return $http.get('/api/questoes/' + tema_id);
        };

        questionsFactory.delete = function(id) {
            return $http.delete('/api/questoes/' + id);
        };

        questionsFactory.add = function(questionData) {
            return $http.post('/api/questoes/', questionData);
        };

        return questionsFactory;
    }
})();