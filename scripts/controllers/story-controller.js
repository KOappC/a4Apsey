(function() {
    function StoryController(StoryService) {
        var vm = this;
        vm.storyInfo = StoryService.getWords();
        console.log(vm.storyInfo);
    }

    angular
        .module("storyApp")
        .controller("StoryController", StoryController);
})();