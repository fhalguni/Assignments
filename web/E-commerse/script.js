function validation(user) {
    if (!user.username || user.username.length < 3) {
        return {
            isValid: false,
            error: { key: "username", value: "Username have atleast 3 characters" },
        };
    }
    var emailregex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
    if (!user.email || !emailregex.test(user.email)) {
        console.log(emailregex.test(user.email));
        return {
            isValid: false,
            error: {
                key: "email",
                value: "email should be write it in standard format",
            },
        };
    }
    if (!user.password || user.password.length <= 6) {
        return {
            isValid: false,
            error: {
                key: "password",
                value: "password length should be greater than 6",
            },
        };
    }
    return { isValid: true, error: null };
}
var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    var _a, _b;
    event.preventDefault();
    var user = {
        username: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };
    var validator = validation(user);
    if (!validator.isValid) {
        alert("error in ".concat((_a = validator.error) === null || _a === void 0 ? void 0 : _a.key, ":").concat((_b = validator.error) === null || _b === void 0 ? void 0 : _b.value));
    }
    else {
        window.alert("Form submitted successfully");
        //   form.submit();
    }
});
