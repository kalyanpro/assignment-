function validateForm(){
    var firstname = document.forms.myform.Firstname.value;
    var lastname = document.forms.myform.Lastname.value;
    var date = document.forms.myform.DateOfBirth.value;
    var option = document.forms.myform.Country.value;
    var Male = document.forms.myform.male.value;
    var Female = document.forms.myform.female.value;
    var profession = document.forms.myform.Profession.value;
    var email = document.forms.myform.Email.value;
    var mobile = document.forms.myform.MoblieNumber.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regMobile=/^\d{10}$/; 
    var regFirstName = /\d+$/g; 
    var regLastName = /\d+$/g;    

    if(firstname == "" || regFirstName.test(firstname)){
        window.alert("please enter your firstname properly");
        firstname.focus();
        return false;
    }

    if(lastname == "" || regLastName.test(lastname)){
        window.alert("please enter your lastname properly");
        lastname.focus();
        return false;
    }

    if(date == ""){
        window.alert("please enter the date");
        date.focus();
        return false;
    }

    if(option == ""){
        window.alert("please select the country");
        option.focus();
        return false;
    }

    if(Male == "" || Female ==""){
        window.alert("please select the option");
        Male.focus();
        Female.focus();
        return false;
    }

    if(profession == ""){
        window.alert("please enter your profession");
        profession.focus();
        return false;
    }

    if(email == "" || regEmail.test(email)){
        window.alert("please enter a valid email address");
        email.focus();
        return false;
    }

    if(mobile == "" || regMobile.test(moblie)){
        window.alert("please enter a valid email address");
        mobile.focus();
        return false;
    }


}  
 