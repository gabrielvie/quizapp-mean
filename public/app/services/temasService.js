(function() {
    'use strict';

    angular
        .module('quizerApp')
        .factory('temasService', temasService);

    function temasService($http, $q) {
        var temasFactory = {};

        temasFactory.get = function(id) {
            return $http.get('/api/temas/' + id);
        };

        temasFactory.all = function() {
            return $http.get('/api/temas/');
        };

        return temasFactory;
    };
})();