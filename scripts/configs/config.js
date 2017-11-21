(function() {
    angular
        .module("storyApp")
        .config(function($routeProvider) {
            $routeProvider
                .when("/form", {
                    template: `<form-component></form-component>`,
                    controller: "FormController as form"
                })
                .when("/story", {
                    template: `<story-component></story-component>`,
                    controller: "StoryController as story"
                })
        });
})();