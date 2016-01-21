"use strict";

app.directive("layout", function () {
    return {
        restrict: "E",
        controller: "LayoutController as layoutCtrl",
        replace: true,
        templateUrl: "templates/tmpl.html",
        link: function () {

        }
    };
});