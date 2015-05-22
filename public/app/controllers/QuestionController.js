(function() {
    'use strict';

    angular
        .module('quizerApp')
        .controller('QuestionController', QuestionController);

    function QuestionController(questionsService, $routeParams) {

        var vm = this;

        vm.questoes = [];


        vm.get = function () {
            questionsService.all($routeParams.tema_id)
                .success(function (data) {
                    vm.questoes = data;
                    console.log(data);
                });
        };

        vm.delete = function (question_id) {
            questionsService.delete(question_id)
                .success(function () {
                    vm.get();
                });
        };

        vm.add = function (pass) {
            if (pass) {
                vm.questao.alternativas[vm.questao.correta].correta = true;
                delete vm.questao.correta;
                questionsService.add(vm.questao)
                    .success(function () {
                        vm.reset();
                        vm.get();
                    });
            }
        };

        vm.reset = function () {
            vm.questao = {};
            vm.questao.alternativas = [
                {correta: false},{correta: false},
                {correta: false},{correta: false}
            ];
        };

        vm.reset();
        vm.get();

    };

})();