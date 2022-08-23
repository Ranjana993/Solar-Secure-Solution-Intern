function submitBtn() {
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmpassword = document.getElementById("confirmpassword").value
    // alert(username, email, password, confirmpassword);

    checkuserName(username)
    checkemail(email)
    checkpassword(password)
    checkConfimPass(pass , confirmpassword)

}


// USERNAME
function checkuserName(name) {
    if (name.length > 7) {
        document.getElementById("username").classList.add("success")
        document.getElementById("username").classList.replace("error", "success")
        document.getElementById("username_err").innerHTML = ""
    } else {
        document.getElementById("username").classList.add("error")
        document.getElementById("username_err").innerHTML = "Value must be 8 letters long."
    }
}


// MAIL 
function checkemail(email) {
    if (email.length > 7 && email.includes('@gmail')) {
        document.getElementById("email").classList.add("success")
        document.getElementById("email").classList.replace("error", "success")
        document.getElementById("email_err").innerHTML = ""
    } else {
        document.getElementById("email").classList.add("error")
        document.getElementById("email_err").innerHTML = "Email must includes @gmail and length should be 8 letters long."
    }
}

// PASSWORD
function checkpassword(password) {
    if (password.length > 7) {
        document.getElementById("password").classList.add("success")
        document.getElementById("password").classList.replace("error", "success")
        document.getElementById("password_err").innerHTML = ""
    } else {
        document.getElementById("password").classList.add("error")
        document.getElementById("password_err").innerHTML = "Password must have length should be 8 letters long."
    }
}

// CONFIRM - PASSWORD
function checkConfimPass(pass, confirmpassword) {
    if (pass === confirmpassword && pass !== "") {
        document.getElementById("confirmpassword").classList.add("success")
        document.getElementById("confirmpassword").classList.replace("error", "success")
        document.getElementById("confirmpassword_err").innerHTML = ""
    } else {
        document.getElementById("confirmpassword").classList.add("error")
        document.getElementById("confirmpassword_err").innerHTML = "Password not matched."
    }
}