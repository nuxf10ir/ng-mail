/**
 * Created by sin on 18.01.2016.
 */
"use strict";

app.directive("layout", function () {
    return {
        restrict: "E",
        controller: "LayoutController as layoutController",
        replace: true,
        templateUrl: "templates/tmpl.html",
        link: function () {

        }
    };
});