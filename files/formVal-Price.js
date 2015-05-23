// JavaScript Document
function validate() {

var errors = 0;

if(document.form1.a_name.value.length < 1) {alert('Please Enter your Name');errors++;}
if(document.form1.b_phoneNumber.value.length < 1) {alert('Please Enter your Phone Number');errors++;}
if(document.form1.c_emailAddress.value.length < 1) {alert('Please Enter your Email Address');errors++;}
if(document.form1.d_state.selectedIndex==0) {alert('Please Select your State');errors++;}
if(document.form1.e_Package.selectedIndex==0) {alert('Please Select a Package');errors++;}

if(errors == 0) 
return true;
else return false;
}

function validate2() {

var errors = 0;

if(document.form3.a2_Name.value.length < 1) {alert('Please Enter your Name');errors++;}
if(document.form3.b2_Phone_Number.value.length < 1) {alert('Please Enter your Phone Number');errors++;}
if(document.form3.c2_Email_Address.value.length < 1) {alert('Please Enter your Email Address');errors++;}
if(document.form3.d2_State.selectedIndex==0) {alert('Please Select your State');errors++;}

if(errors == 0) 
return true;
else return false;
}