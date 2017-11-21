(function() {
    function StoryService() {
        var dataFromForm = {};

        return {
            setWords: setWords,
            getWords: getWords
        };

        function setWords(info) {
            dataFromForm = info;
            console.log(info);
        }

        function getWords() {
            return dataFromForm;
        }
    }

    angular
        .module("storyApp")
        .factory("StoryService", StoryService)
})();