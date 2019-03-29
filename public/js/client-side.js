$(document).ready(function () {
// On document load, initiate carousel of info tiles
    $('.carousel').carousel();
    setInterval(function () {
        $('.carousel').carousel('next');
    }, 4000);
    $('.modal').modal();
});


$(document).ready(function () {
    $('.tap-target').tapTarget('open');
});




let currentUserId;
$('#signupButton').on('click', function() {
    const regEmail = $('#emailSignup').val().trim();
    const regPassword = $('#passwordSignup').val().trim();
    const confPassword = $('#passwordSignupConfirm').val().trim();
    

    const userObj = {
        email_address: regEmail,
        password: regPassword
    };


    $.post('/', userObj, (result) => {
        if (result.success) {
            location.href = '/landingpage'
            console.log(result)
             currentUserId = result.results.id;
            console.log("current user id: ", currentUserId);
            
        } else {
            console.log(`sorry`);
        }

   
    })
})



$('#signinButton').on('click', function() {
    const email = $('#emailSignin').val().trim();
    const password = $('#passwordSignin').val().trim();
    $.post('/login', {
        email_address: email,
        password: password
    }, (result) => {
   
            if (result.success) {
                console.log(result)
                location.href = '/landingpage'
            } else {
                console.log(`sorry`);
            }

    })
})



$("#modal2Open").on("click", function () {
    $("#modal1").modal("close")
    $("#modal2").modal("open")
})

$("#modal1Open").on("click", function () {
    $("#modal2").modal("close")
    $("#modal1").modal("open")
})

// When a user clicks on #addMoreOptions, if the current option count is less than 10....
// Grab the user input from the form, and assign to variable newInput
// Add id, and type attributes. Add "options" as the class
// Then generate a button with class "btn", text of "X", a data-id attribute, and "optionDelete" as a class
// Append the newInput and newButton to the #moreOptions div
let optionNumber = 2;
$("#addMoreOptions").on("click", function () {
    optionNumber++;
    if(optionNumber > 10){
        return
    }
    let newInput = $("<input>");
    newInput.attr("id", "option" + optionNumber);
    newInput.attr("type", "text");
    newInput.addClass("options")
    let newButton = $("<button>")
    newButton.addClass("btn", "btn-blue");
    newButton.text("x");
    newButton.attr("data-id", "option" + optionNumber)
    newButton.addClass("optionDelete");
    $("#moreOptions").append(newInput)
    $("#moreOptions").append(newButton)
})

// When a user clicks on the delete button next to an option
// grab the data-id attribute from the option selected, assign that value to a new variable called buttonID
// look through each option div, and if the button ID of that div matches the button id assigned to buttonID, delete that option 
$(document).on('click', '.optionDelete', function () {
    let buttonID = $(this).attr("data-id")
    console.log(buttonID);
    $(".options").each(function () {
        if (buttonID === $(this).attr("id")) {
            $(this).remove();
        }
    })
    $(this).remove();
    optionNumber --;
});

//send the poll info server side////
$("#createPollButton").on("click", function(event){
    event.preventDefault();
    console.log(currentUserId)
    let question = $("#pollQuestion").val().trim();
    let option1 = $("#option1").val().trim();
    let option2 = $("#option2").val().trim();
    let option3 = $("#option3").val() || null;
    let option4 = $("#option4").val() || null;
    let option5 = $("#option5").val()|| null;
    let option6 = $("#option6").val()|| null;
    let option7 = $("#option7").val()|| null;
    let option8 = $("#option8").val()|| null;
    let option9 = $("#option9").val()|| null;
    let option10 = $("#option10").val() || null;
    let newPoll = {
        question: question,
        option1 : option1,
        option2 : option2,
        option3 : option3,
        option4 : option4,
        option5 : option5,
        option6 : option6,
        option7 : option7,
        option8 : option8,
        option9 : option9,
        option10 : option10,
        UserId: 1
    }
    $.ajax("/polls", {
        type: "POST",
        data: newPoll
    }).then(function(results){
        console.log(results)
        
    })
})

