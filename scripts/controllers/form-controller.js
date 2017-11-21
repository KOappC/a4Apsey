(function() {
    function FormController(StoryService) {
        var vm = this;
        vm.addWords = function(newInfo) {
            StoryService.setWords(newInfo);
        };
    }

    angular
        .module("storyApp")
        .controller("FormController", FormController)
})();