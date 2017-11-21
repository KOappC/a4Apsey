(function() {
    var FormComponent = {
        controller: "FormController as form",
        /*templateUrl: "./partials/form.html"*/
        template: `
            <input ng-model="form.info.noun" placeholder="noun">
            <input ng-model="form.info.color" placeholder="color">
            <input ng-model="form.info.verb" placeholder="verb">
            <input ng-model="form.info.adverb" placeholder="adverb">
            <button type="button" ng-click="form.setWords(form.info)">Read Story</button>
        `
    };

    angular
        .module("storyApp")
        .component("FormComponent", FormComponent);
})();