"use strict";

app.directive('messagesDetail', function(){
    return {
        restrict: 'E',
        scope: {
            message: "="
        },
        templateUrl: 'templates/messages-detail.html'
    };
});