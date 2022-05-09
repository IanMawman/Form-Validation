
function validateForm() {
    // Retrieving the values of each section of form
    var name = document.userForm.name.value; // document.formname.value interested in per section of form. value
    var email = document.userForm.email.value;
    var CC = document.userForm.cc.value;

    // Making a function to display any error messages
function printError(elemId, autoMsg) {
    document.getElementById(elemId).innerHTML = autoMsg; // gets each errorID from the form to get the value data 
}
    
	
    var errorName = errorEmail = errorCC = true;
    
    // Name Validation
    if(name == "") {
        printError("errorName", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;      // using regex to shorten how many characters are needed to put into validate          
        if(regex.test(name) === false) {
            printError("errorName", "Please enter a valid name");
        } else { // defining each specific error message for NAME 
            printError("errorName", "");
            errorName = false;
        }
    }
    
    //Email validation
    if(email == "") {
        printError("errorEmail", "Please enter your email address");
    } else {
        // expression for email validation using regex to make sure it follows the correct sequence 
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("errorEmail", "Please enter a valid email address");
        } else{  // defining each specific error messafe for EMAIL
            printError("errorEmail", "");
            errorEmail = false;
        }
    }
    
    //CC validation
    if(CC == "") { // this makes sure that the field is not empty 
        printError("errorCC", "Please enter your Credit Card number");
    } else {
        var regex = /^[1-15]\d{15}$/; // allows only 16 numbers without throwing an error using regex to define values 1-15 not being valid
        if(regex.test(CC) === false) {
            printError("errorCC", "Please enter a valid 16 digit Credit Card number");
        } else{  // defining each specific error messafe for CC NUMBER. 
            printError("errorCC", ""); 
            errorCC = false;
        }
    } // using luhn's algorithim to process each credit card would help to be more effective in the future
    
    // Prevent the form from being submitted if there are any errors
    if((errorName || errorEmail || errorCC) == true) {
       return false;
    }
}
