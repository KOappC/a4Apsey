(function() {
    var storyComponent = {
        controller: "StoryController as story",
        templateUrl: "./partials/story.html"
    };

    angular
        .module("storyApp")
        .component("storyComponent", storyComponent)
})();