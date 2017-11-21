(function() {
    this.setWords = function(info) {
        dataFromForm = info;
    };

    angular
        .module("storyApp")
        .service("StoryService", StoryService)
})();