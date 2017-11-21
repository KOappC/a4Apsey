(function() {
    function StoryController(StoryService) {
        var vm = this;
        vm.storyInfo = StoryService.getWords();
    }

    angular
        .module("storyApp")
        .controller("StoryController", StoryController);
})();