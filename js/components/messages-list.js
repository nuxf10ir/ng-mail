"use strict";

app.directive('messagesList', function(){
    return {
        restrict: 'E',
        scope: {
            folder: "=",
            messages: "="
        },
        templateUrl: 'templates/messages-list.html',
        link: function(scope) {

            scope.updateMessage = function(message, param, value) {
                message[param] = value;
            }

        }
    };
});