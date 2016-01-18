/**
 * Created by sin on 18.01.2016.
 */

app.controller('LayoutController', function(){
    var DEFAULT_LAYOUT = "inbox";

    var self = this;

    self._currentLayout = "";

    self.states = [
        {
            type: "inbox",
            title: "Входящие",
            count: 5
        },
        {
            type: "outbox",
            title: "Исходящие",
            count: 3
        },
        {
            type: "trash",
            title: "Корзина",
            count: 2
        }
    ];

    self.messages = [
        {
            type: "inbox",
            title: "Письмо 1",
            theme: "Тема письма 1",
            email: "email1@mail.em",
            text: "<p>Привет, мир!</p><p>Это текст письма1</p><p>С наилучшими пожеланиями от автора письма1</p>"
        },
        {
            type: "inbox",
            title: "Письмо 2",
            theme: "Тема письма 2",
            email: "email2@mail.em",
            text: "<p>Привет, мир!</p><p>Это текст письма2</p><p>С наилучшими пожеланиями от автора письма2</p>"
        },
        {
            type: "inbox",
            title: "Письмо 3",
            theme: "Тема письма 3",
            email: "email3@mail.em",
            text: "<p>Привет, мир!</p><p>Это текст письма3</p><p>С наилучшими пожеланиями от автора письма3</p>"
        },
        {
            type: "inbox",
            title: "Письмо 4",
            theme: "Тема письма 4",
            email: "email4@mail.em",
            text: "<p>Привет, мир!</p><p>Это текст письма4</p><p>С наилучшими пожеланиями от автора письма4</p>"
        },
        {
            type: "inbox",
            title: "Письмо 5",
            theme: "Тема письма 5",
            email: "email1@mail.em",
            text: "<p>Привет, мир!</p><p>Это текст письма5</p><p>С наилучшими пожеланиями от автора письма5</p>"
        },
        {
            type: "outbox",
            title: "Письмо 6",
            theme: "Тема письма 6",
            email: "email6@mail.em",
            text: "<p>Привет, мир!</p><p>Это текст письма6</p><p>С наилучшими пожеланиями от меня</p>"
        },
        {
            type: "outbox",
            title: "Письмо 7",
            theme: "Тема письма 7",
            email: "email7@mail.em",
            text: "<p>Привет, мир!</p><p>Это текст письма7</p><p>С наилучшими пожеланиями от меня</p>"
        },
        {
            type: "outbox",
            title: "Письмо 8",
            theme: "Тема письма 8",
            email: "email8@mail.em",
            text: "<p>Привет, мир!</p><p>Это текст письма8</p><p>С наилучшими пожеланиями от меня</p>"
        },
        {
            type: "trash",
            title: "Письмо 9",
            theme: "Тема письма 9",
            email: "email9@mail.em",
            text: "<p>Привет, корзинка!</p><p>Это текст письма9</p><p>С наилучшими пожеланиями из корзинки</p>"
        },
        {
            type: "trash",
            title: "Письмо 10",
            theme: "Тема письма 10",
            email: "email10@mail.em",
            text: "<p>Привет, корзинка!</p><p>Это текст письма10</p><p>С наилучшими пожеланиями из корзинки</p>"
        }
    ];

    self.getLayout = function() {
        return self._currentLayout;
    };

    self.setLayout = function(layout) {
        self._currentLayout = layout;
    };



    self.setLayout(DEFAULT_LAYOUT);


});