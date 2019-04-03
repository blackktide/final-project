
function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var lastName = document.forms["myForm"]["lname"].value;
    var email = document.forms["myForm"]["emailaddress"].value;
    var bcit = document.forms["myForm"]["bcit"].value;
    var check = true;

    if (name == "") {
      alert("Name must be filled out");
      check = false;
      return false;
    }

    if (lastName == "") {
      alert("Last Name must be filled out");
      check = false;
      return false;
    }

    if (email == "") {
      alert("Email must be filled out");
      check = false;
      return false;
    }

    if(bcit != ""){
            
            if(bcit.includes("A0")){
        }else{
            alert("Enter a valid BCIT number!");
            check = false;
            return false;
        }
    }

    if(check){
        alert("The data has been sent");
        return true;
    }
  }

  