"use strict";

app.service('MessagesService', function($http) {

    this.loadMessages = function() {
        return $http.get("http://beta.json-generator.com/api/json/get/Ey3jWE9ux?delay=3000");
    };

});