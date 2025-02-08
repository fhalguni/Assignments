interface User {
  username: string;
  email: string;
  password: string;
}

interface isValidate {
  isValid: Boolean;
  error: {
    key: string;
    value: string;
  } | null;
}

function validation(user: User): isValidate {
  if (!user.username || user.username.length < 3) {
    return {
      isValid: false,
      error: { key: "username", value: "Username have atleast 3 characters" },
    };
  }
  var emailregex = new RegExp(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
  );
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

const form = document.querySelector("form")!;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user: User = {
    username: (document.getElementById("name") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    password: (document.getElementById("password") as HTMLInputElement).value,
  };
  const validator = validation(user);
  if (!validator.isValid) {
    alert(`error in ${validator.error?.key}:${validator.error?.value}`);
  } else {
    window.alert("Form submitted successfully");
    //   form.submit();
  }
});
