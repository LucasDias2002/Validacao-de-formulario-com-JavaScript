document.getElementById("forms").addEventListener("submit", (evt) => {
    evt.preventDefault();
    let name = document.getElementById("name1");
    let secname = document.getElementById("name2");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let checkbox = document.getElementById("checkbox");
    let radio1 = document.getElementById("radio1");
    let radio2 = document.getElementById("radio2");

    let nametest, secnametest, emailtest, radiotest, messagetest, checkboxtest = false;

    if (name.value == "") {
        name.style.borderColor = "red";
        document.getElementById("erro1").innerHTML = "This field is required";
    }
    else {
        name.style.borderColor = "rgb(85, 85, 85)";
        document.getElementById("erro1").innerHTML = "";
        nametest = true;
    }

    if (secname.value == "") {
        secname.style.borderColor = "red";
        document.getElementById("erro2").innerHTML = "This field is required";
    }
    else {
        secname.style.borderColor = "rgb(85, 85, 85)";
        document.getElementById("erro2").innerHTML = "";
        secnametest = true;
    }

    let emailvalido = false;
    for (let i = 0; i < email.value.length; i++) {
        if (email.value[i] == "@") {
            emailvalido = true;
            break;
        }
    }
    if (emailvalido == false || email.value == "") {
        email.style.borderColor = "red";
        document.getElementById("erro3").innerHTML = "Please enter a valid email address";
        emailtest = false;
    }
    else {
        email.style.borderColor = "rgb(85, 85, 85)";
        document.getElementById("erro3").innerHTML = "";
        emailtest = true;
    }

    if (radio1.checked || radio2.checked) {
        document.getElementById("erro4").innerHTML = "";
        radiotest = true;
    }
    else {
        erro5.style.borderColor = "rgb(85, 85, 85)";
        document.getElementById("erro4").innerHTML = "Please select a query type";
        radiotest = false;
    }

    if (message.value == "") {
        message.style.borderColor = "red";
        document.getElementById("erro5").innerHTML = "This field is required";
    }
    else {
        message.style.borderColor = "rgb(85, 85, 85)";
        document.getElementById("erro5").innerHTML = "";
        messagetest = true;
    }

    if (checkbox.checked) {
        document.getElementById("erro6").innerHTML = "";
        checkboxtest = true;
    }
    else {
        checkbox.style.borderColor = "rgb(85, 85, 85)";
        document.getElementById("erro6").innerHTML = "To submit this form, please consent to being contacted";
    }

    if (nametest == false || secnametest == false || emailtest == false || radiotest == false || messagetest == false || checkboxtest == false)
        alert("Form not sent!");
    else{
        alert("Form sent");
    }
})