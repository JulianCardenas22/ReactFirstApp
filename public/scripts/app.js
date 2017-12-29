"use strict";

var app = {
    Title: "Indecision App",
    Subtitle: "My indecision App",
    Options: []
};

var AddOption = function AddOption(e) {

    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.Options.push(option);
        e.target.elements.option.value = "";
        RenderApp();
    }

    console.log("form submited ");
};

var MakeDecision = function MakeDecision() {
    if (app.Options.length > 0) {
        var randomNum = Math.floor(Math.random() * app.Options.length);
        var option = app.Options[randomNum];
        alert(option);
    }
};

var DeleteAll = function DeleteAll() {
    app.Options = [];
    RenderApp();
};

var RenderApp = function RenderApp() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.Title
        ),
        app.Subtitle && React.createElement(
            "p",
            null,
            app.Subtitle
        ),
        React.createElement(
            "p",
            null,
            app.Options.length > 0 ? "your options" : "no options",
            "  "
        ),
        React.createElement(
            "button",
            { onClick: DeleteAll },
            "DELETE ALL!"
        ),
        React.createElement(
            "ol",
            null,
            app.Options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    " ",
                    option,
                    " "
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: AddOption },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        ),
        React.createElement(
            "button",
            { disabled: app.Options.length === 0, onClick: MakeDecision },
            "What should i do?"
        )
    );

    var appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
};

RenderApp();
