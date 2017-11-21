(function() {
    var StoryComponent = {
        controller: "StoryController as story",
        /*templateUrl: "./partials/story.html"*/
        template: `
        <p>One fine day, my trusty {{ story.info.noun }} woke up to find a {{ story.info.color }} cat.  The cat was {{ story.info.verb }} {{ story.info.adverb }}.  What a weird morning...</p>
        `
    };

    angular
        .module("storyApp")
        .component("StoryComponent", StoryComponent)
})();