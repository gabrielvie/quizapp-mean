(function() {
    'use strict';

    angular
        .module('quizerApp')
        .controller('MainController', MainController);

    function MainController(temasService) {

        var vm = this;

        vm.temas = [];

        temasService.all()
            .success(function (data) {
                vm.temas = data;
            });

    };

})();