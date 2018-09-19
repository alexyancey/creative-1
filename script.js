var responses = ["The Password and Confirm Password must match.", 
                "Please enter a valid name.", 
                "Please put a valid reponse in every field.", 
                "You call that an account? Please make it more secure.",
                "Please get it right this time, I'm getting board",
                "It has been ever so fun to troll you."]


function checkIfEmpty(){
    
}

function checkIfSame(event){
    var password = document.getElementsByName("txtPassword").value;
    var confirmPassword = document.getElementsByName("txtConfirm").value
    if(password == confirmPassword){
        event.preventDefault();
        return;
    }else{
        document.getElementById("errConfirm").style.visibility = "visible";
    }
}

