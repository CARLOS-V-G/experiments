function validateForm() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const password2 = document.getElementById("password2").value.trim();
    let valid = true;

    if (username == "") {
        document.getElementById("usernameError").innerHTML = "Please enter username";
        valid = false;
    } else {
        document.getElementById("usernameError").innerHTML = "";
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Please enter email";
        valid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (password == "") {
        document.getElementById("passwordError").innerHTML = "Please enter password";
        valid = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    if (password2 == "") {
        document.getElementById("password2Error").innerHTML = "Please repeat password";
        valid = false;
    } else {
        document.getElementById("password2Error").innerHTML = "";
    }

    return valid;
}

