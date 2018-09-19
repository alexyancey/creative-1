var responses = ["The Password and Confirm Password must match.", 
                "Please enter a valid name.", 
                "Please put a valid reponse in every field.", 
                "You call that an account? Please make it more secure.",
                "Please get it right this time, I'm getting board",
                "It has been ever so fun to troll you."]
                
var count = 0;


function reset()
{
    document.getElementById("txtFirstName").value = "";
    //document.getElementById("errFirstName").style.visibility= "hidden";
    
    document.getElementById("txtMiddleName").value = "";
    //document.getElementById("errMiddleName").style.visibility= "hidden";
    
    document.getElementById("txtLastName").value = "";
    //document.getElementById("errLastName").style.visibility= "hidden";
    
    document.getElementById("txtAddress").value = "";
    //document.getElementById("errAddress").style.visibility= "hidden";
    
    document.getElementById("txtCity").value = "";
    //document.getElementById("errCity").style.visibility= "hidden";
    
    document.getElementById("txtState").value = "";
    //document.getElementById("errState").style.visibility= "hidden";
    
    document.getElementById("txtEmail").value = "";
    //document.getElementById("errEmail").style.visibility= "hidden";
    
    document.getElementById("txtPassword").value = "";
    //document.getElementById("errPassword").style.visibility= "hidden";
    
    document.getElementById("txtConfirm").value = "";
    //document.getElementById("errConfirm").style.visibility= "hidden";
}

function checkIfEmpty(){
    var firstName = document.getElementById("txtFirstName").value;
    var middleName = document.getElementById("txtMiddleName").value;
    var lastName = document.getElementById("txtLastName").value;
    var address = document.getElementById("txtAddress").value;
    var city = document.getElementById("txtCity").value;
    var state = document.getElementById("txtState").value;
    var email = document.getElementById("txtEmail").value;
    var password = document.getElementById("txtPassword").value;
    var confirm = document.getElementById("txtConfirm").value;
    
    
    
    if (firstName === "")
        document.getElementById("errFirstName").style.visibility = "visible";
    else
        document.getElementById("errFirstName").style.visibility = "hidden";
    if (middleName === "")
        document.getElementById("errMiddleName").style.visibility = "visible";
    else
        document.getElementById("errMiddleName").style.visibility = "hidden";
    if (lastName === "")
        document.getElementById("errLastName").style.visibility = "visible";
    else
        document.getElementById("errLastName").style.visibility = "hidden";
    if (address === "")
        document.getElementById("errAddress").style.visibility = "visible";
    else
        document.getElementById("errAddress").style.visibility = "hidden";
    if (city === "")
        document.getElementById("errCity").style.visibility = "visible";
    else
        document.getElementById("errCity").style.visibility = "hidden";
    if (state === "")
        document.getElementById("errState").style.visibility = "visible";
    else
        document.getElementById("errState").style.visibility = "hidden";
    if (email === "")
        document.getElementById("errEmail").style.visibility = "visible";
    else
        document.getElementById("errEmail").style.visibility = "hidden";
    if (password === "")
        document.getElementById("errPassword").style.visibility = "visible";
    else
        document.getElementById("errPassword").style.visibility = "hidden";
    if (confirm === "")
        document.getElementById("errConfirm").style.visibility = "visible";
    else
        document.getElementById("errLastName").style.visibility = "hidden";
}

function checkIfSame(){
    var password = document.getElementById("txtPassword").value;
    var confirmPassword = document.getElementById("txtConfirm").value;
    
    if(password === "" || confirmPassword === "")
        return;
    if(password === confirmPassword){
        return;
    }else{
        document.getElementById("errConfirm").style.visibility = "visible";
    }
}

function submit()
{
    checkIfEmpty();
    checkIfSame();
    reset();
    document.getElementById("msgTroll").innerHTML = responses[count];
    if (count > 4)
    {
        count = 0;
    }
    else
        count++;
}

