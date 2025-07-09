


function playSound(fnaf) {
  document.getElementById(fnaf).play();
};


    


// This is where we put the code that runs if the form is filled in correctly

//create variables that hold the info the user enters
$(document).ready(function(){
  // Get the forms we want to add validation styles to
$("#sendMail").click(function(){



var forms = document.getElementsByClassName('needs-validation');

// Loop over them and prevent submission

var validation = Array.prototype.filter.call(forms, function(form) {

form.addEventListener('click', function(event) {

if (form.checkValidity() === false) {

event.preventDefault();

event.stopPropagation();

}else {

// This is where we put the code that runs if the form is filled in correctly

//create variables that hold the info the user enters
var first = $("#FirstName").val();
console.log(first);

var last = $("#LastName").val();
console.log(last);

var email = $("#Email").val();
console.log(email);

var message = $("#Message").val();
console.log(message);

//this is sent to PHP - concatenated mix of variable names and strings
var dataString = "first="+first+"&last="+last+"&email="+email+"&message="+message;
console.log(dataString);


$.ajax({

  type:"POST",
 
  url:"ShyloWebsite.php",

  data: dataString,
 
  success: function(){// if it successfully sends to php do this stuff
      //message to user
      $("#response").html("Thank you for getting in contact!");
      //clear all fields
      $("#FirstName").val("");
      $("#LastName").val("");
      $("#Email").val("");
      $("#Message").val("");
  }


 
  });
 

}

form.classList.add('was-validated');

}, false);

});
}); //click

}); //document ready
