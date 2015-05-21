(function() {
    'use strict';
    
    angular
        .module('quizerApp')
        .controller('QuizController', QuizController);
        
    function QuizController(questionsService, answerService) {
        var vm = this;
        vm.message = {};
        vm.question = {};
        vm.question.answers = [
            {answer: "Sim", correct: false},
            {answer: "Não", correct: false},
            {answer: "Talvez", correct: false},
            {answer: "Depois", correct: false},
            {answer: "Nenhuma das anteriores", correct: false}
        ];
        
        vm.collection = [];
        
        vm.getAllQuestions = function () {
            questionsService.getAll()
                .then(function(collection) {
                    vm.collection = collection;
                    vm.getAnswers();
                });
        };
        
        vm.getAllQuestions();

        vm.getAnswers = function(){
            vm.collection.forEach(function(item, index){
                answerService.getAll(item.id)
                    .then(function(response) {
                        item.answers = response;
                    }
                );
            });
            console.log(vm.collection);
        };

        vm.add = function (isValid) {
            if (isValid) {
                questionsService.add(vm.question)
                    .then(function(question) {
                        vm.addAnswers(question);
                    });
            }
        };

        vm.addAnswers = function(question_id){
            vm.question.answers[vm.question.correct].correct = true;
            vm.question.question_fk = question_id;

            delete vm.question.correct;
            delete vm.question.question;

            answerService.add(vm.question)
                .then(function(response) {
                    vm.getAllQuestions();
                });

        };
        
        vm.delete = function (questionId) {
            questionsService.delete(questionId)
                .then(function(response) {
                    vm.getAllQuestions();
                });
        };
        
        
        
    };
})();