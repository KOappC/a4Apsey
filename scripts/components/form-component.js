(function() {
    var formComponent = {
        controller: "FormController as form",
        templateUrl: "./partials/form.html"
    };

    angular
        .module("storyApp")
        .component("formComponent", formComponent);
})();