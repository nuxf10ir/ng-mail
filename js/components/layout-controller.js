"use strict";

app.controller('LayoutController', function(MessagesService) {
    var self = this;

    self._state = null;

    self._currentFolder = null;
    self._currentMessage = null;

    self._folders = [
        {type: "inbox", title: "Входящие"},
        {type: "outbox", title: "Исходящие"},
        {type: "trash", title: "Корзина"}
    ];

    self._allMessages = [];

    self.getFolders = function() {
        return self._folders;
    };

    self.getCurrentFolder = function() {
        return self._currentFolder;
    };

    self.setCurrentFolder = function(folder) {
        self._currentFolder = folder;
    };

    self.getCurrentMessage = function() {
        return self._currentMessage;
    };

    self.setCurrentMessage = function(message) {
        self._currentMessage = message;
    };

    self.getState = function() {
        return self._state || "loading";
    };

    self.setState = function(state) {
        self._state = state;
    };

    self.getMessages = function() {
        return self._allMessages;
    };

    self.browseMessage = function(message) {
        self.setCurrentMessage(message);
        self.setState("message");
    };

    self.getMessagesCount = function(type) {
        return self._allMessages.filter(function(message) {
            return message.type === type;
        }).length;
    };

    self.loadMessages = function() {
        MessagesService
            .loadMessages()
            .then(function (response) {
                self._allMessages= response.data;
                self.setCurrentFolder(self._folders[0]);
                self.setState("list");

            });
    };

    self.loadMessages();




});