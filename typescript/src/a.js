var Utils;
(function (Utils) {
    function greet(name) {
        return "Hello, ".concat(name, "!");
    }
    Utils.greet = greet;
    function farewell(name) {
        return "Goodbye, ".concat(name, "!");
    }
    Utils.farewell = farewell;
})(Utils || (Utils = {}));
