(function() {
    'use strict';

    angular
        .module('quizerApp')
        .controller('MainController', MainController);

    function MainController(temasService, $routeParams) {

        var vm = this;

        vm.temas = [];

        temasService.all()
            .success(function (data) {
                vm.temas = data;
            });

        vm.getTemaName = function () {
            var temaName = "";
            vm.temas.forEach(function (item, index) {
                if (item._id === $routeParams.tema_id) {
                    temaName = item.titulo;
                }
            });

            return temaName;
        };

    };

})();