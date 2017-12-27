"use strict";

var app = {
    Title: "Indecision App",
    Subtitle: "put your life in the hands of a computer",
    options: ["one", "two"]
};

var user = {
    Name: 'Julian Cardenas',
    Age: 21,
    Location: 'Monterrey',
    Places: ["Mexico", "USA", "Chile"],
    PrintPlacesLived: function PrintPlacesLived() {
        var _this = this;

        console.log(this.Name);
        console.log(this.Age);
        console.log(this.Location);
        this.Places.forEach(function (city) {
            console.log(_this.Name + " has lived in " + city);
        });
    }
};

user.PrintPlacesLived();

var getFirstName = function getFirstName(user) {
    return user.Name.split(" ")[0];
};

var gfn = function gfn(user) {
    return user.Name.split(" ")[0];
};

var gfnlet = function gfnlet(user) {
    return user.Name.split(" ")[0];
};
function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        "Location: ",
        location
    );
};

console.log("\n");
console.log(gfnlet(user));
console.log(gfn(user));
console.log(getFirstName(user));

var appRoot = document.getElementById("app");
// templates
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
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "li"
        ),
        React.createElement(
            "li",
            null,
            "li"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.Name ? user.Name : "Anonymous"
    ),
    user.Age && user.Age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.Age + " !"
    ),
    getLocation(user.Location)
);

ReactDOM.render(template, appRoot);
