function validation(){
    if(document.formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username";
        return false;
    }
    else if(document.formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter";
        return false;
    }
    else if(document.formfill.Email-id.value==""){
        document.getElementById("result").innerHTML="Enter Email-id";
        return false;
    }
    else if(document.formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter Password";
        return false;
    }
    else if(document.formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits";
        return false;
    }
    else if(document.formfill.ConfirmPassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password";
        return false;
    }
    else if(document.formfill.ConfirmPassword.value!==document.formfill.Password.value){
        document.getElementById("result").innerHTML="Password doesn't matched ";
        return false;
    }
    else if(document.formfill.Password.value!==document.formfill.ConfirmPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
} 
var popup=document.getElementById('popup');  
function CloseSlide(){
    popup.classList.remove("open-slide")
    
} 