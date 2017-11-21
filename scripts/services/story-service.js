(function() {
    function StoryService() {
        var dataFromForm = {};

        this.setWords = function(info) {
            dataFromForm = info;
            console.log(dataFromForm);
        };

        this.getWords = function() {
            return dataFromForm;
        }
    }

    angular
        .module("storyApp")
        .service("StoryService", StoryService)
})();