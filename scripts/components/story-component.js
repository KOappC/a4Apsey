(function() {
    var storyComponent = {
        controller: "StoryController as story",
        /*templateUrl: "./partials/story.html"*/
        template: `
        <p>One fine day, my trusty {{ story.storyInfo.noun }} woke up to find a {{ story.storyInfo.color }} cat.  The cat was {{ story.storyInfo.verb }} {{ story.storyInfo.adverb }}.  What a weird morning...</p>
        `
    };

    angular
        .module("storyApp")
        .component("storyComponent", storyComponent)
})();