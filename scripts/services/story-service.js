(function() {
    function StoryService($location) {
        var dataFromForm = {};

        return {
            setWords: setWords,
            getWords: getWords
        };

        function setWords(info) {
            dataFromForm = info;
            $location.path("/story")
        }

        function getWords() {
            return dataFromForm;
        }
    }

    angular
        .module("storyApp")
        .factory("StoryService", StoryService)
})();