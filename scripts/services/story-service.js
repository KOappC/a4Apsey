(function() {
    function StoryService() {
        var dataFromForm = {};

        this.setWords = function(info) {
            dataFromForm = info;
        };

        this.getWords = function() {
            return dataFromForm;
        }
    };

    angular
        .module("storyApp")
        .service("StoryService", StoryService)
})();