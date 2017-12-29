"use strict";

var app = {
    Title: "Indecision App",
    Subtitle: "My indecision App",
    Options: ["one", "two"]
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
            app.Options > 0 ? "your options" : "no options",
            "  "
        ),
        React.createElement(
            "p",
            null,
            app.Options.length
        ),
        React.createElement(
            "button",
            { onClick: DeleteAll },
            "DELETE ALL!"
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                "Item"
            ),
            React.createElement(
                "li",
                null,
                "Item"
            )
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
        )
    );

    var appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
};

RenderApp();
