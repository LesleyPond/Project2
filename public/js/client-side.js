
$(document).ready(function() {
// On document load, initiate carousel of info tiles
  $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 4000);
  $('.modal').modal();
});

//  on sign up button click, check to make sure passwords match. If they don't, show error message. If they do, create new user in db, login, and go to landing page
$('#signupButton').on('click', function() {
  $('#noConfirm').hide();
  const regEmail = $('#emailSignup').val().trim();
  const regPassword = $('#passwordSignup').val().trim();
  const confPassword = $('#passwordSignupConfirm').val().trim();

  if (regPassword === confPassword) {
    const userObj = {
      email_address: regEmail,
      password: regPassword,
    };

    $.post('/', userObj, (result) => {
      if (result.success) {
        console.log(result);
        const currentUserId = result.data.id;
        localStorage.setItem('currentUserId', currentUserId);
        console.log('current user id: ', currentUserId);
        location.href = '/landingpage';
      } else {
        console.log(result.message);
        $('#badSignin').append(result.message);
        $('#badSignin').show();
      }
    });
  } else {
    $('#noConfirm').show();
  }
});


// on sign in button click, sign in! If unable to sign in, show error div.//
$('#signinButton').on('click', function() {
  const email = $('#emailSignin').val().trim();
  const password = $('#passwordSignin').val().trim();

  $.post('/login', {
    email_address: email,
    password: password,
  }, (result) => {
    if (result.success) {
      console.log(result.data.payload.id);
      const currentUserId = result.data.payload.id;
      localStorage.setItem('currentUserId', currentUserId);
      location.href = '/landingpage';
    } else {
      console.log(`sorry`);
      $('#badLogin').show();
    }
  });
});

$('.signOutButton').on('click', function() {
  // /need to add sign out functionality//
  localStorage.removeItem('currentUserId');
});


$('#modal2Open').on('click', function() {
  $('#modal1').modal('close');
  $('#modal2').modal('open');
});

$('#modal1Open').on('click', function() {
  $('#modal2').modal('close');
  $('#modal1').modal('open');
  $('#badLogin').hide();
});

// When a user clicks on #addMoreOptions, if the current option count is less than 10....
// Grab the user input from the form, and assign to variable newInput
// Add id, and type attributes. Add "options" as the class
// Then generate a button with class "btn", text of "X", a data-id attribute, and "optionDelete" as a class
// Append the newInput and newButton to the #moreOptions div
let optionNumber = 2;
$('#addMoreOptions').on('click', function() {
  optionNumber++;
  if (optionNumber > 10) {
    return;
  }
  const newInput = $('<input>');
  newInput.attr('id', 'option' + optionNumber);
  newInput.attr('type', 'text');
  newInput.addClass('options');
  const newButton = $('<button>');
  newButton.addClass('btn', 'btn-blue');
  newButton.text('x');
  newButton.attr('data-id', 'option' + optionNumber);
  newButton.addClass('optionDelete');
  $('#moreOptions').append(newInput);
  $('#moreOptions').append(newButton);
});

// When a user clicks on the delete button next to an option
// grab the data-id attribute from the option selected, assign that value to a new variable called buttonID
// look through each option div, and if the button ID of that div matches the button id assigned to buttonID, delete that option
$(document).on('click', '.optionDelete', function() {
  const buttonID = $(this).attr('data-id');
  console.log(buttonID);
  $('.options').each(function() {
    if (buttonID === $(this).attr('id')) {
      $(this).remove();
    }
  });
  $(this).remove();
  optionNumber--;
});

//  send the poll info server side////
$('#createPollButton').on('click', function(event) {
  event.preventDefault();
  const question = $('#pollQuestion').val().trim();
  const option1 = $('#option1').val().trim();
  const option2 = $('#option2').val().trim();
  const option3 = $('#option3').val() || null;
  const option4 = $('#option4').val() || null;
  const option5 = $('#option5').val() || null;
  const option6 = $('#option6').val() || null;
  const option7 = $('#option7').val() || null;
  const option8 = $('#option8').val() || null;
  const option9 = $('#option9').val() || null;
  const option10 = $('#option10').val() || null;
  const UserId = localStorage.getItem('currentUserId');
  const newPoll = {
    question: question,
    option1: option1,
    option2: option2,
    option3: option3,
    option4: option4,
    option5: option5,
    option6: option6,
    option7: option7,
    option8: option8,
    option9: option9,
    option10: option10,
    UserId: UserId,
    resultsPageURL: `${window.location.href}results/`,
    votingPageURL: `${window.location.href}votes/`,
  };
  $.ajax('/polls/' + UserId, {
    type: 'POST',
    data: newPoll,
  }).then(function(results) {
    location.href='/viewPolls/'+UserId;
  });
});


$('#navigateViewPolls').on('click', function() {
  const UserId = localStorage.getItem('currentUserId');
  location.href='/viewPolls/'+UserId;
});

//  change password functionality//
$('#updatePassword').on('click', function() {
  const UserId = localStorage.getItem('currentUserId');
  const newPassword = $('#passwordChange1').val();
  const newPasswordConf = $('#passwordChange2').val();
  if (newPassword === newPasswordConf) {
    const newPassObj = {
      password: newPasswordConf,
    };
    $.ajax('/passwordChange/ ' + UserId, {
      type: 'PUT',
      data: newPassObj,
    }).then(function(results) {
      $('#passwordSuccess').show();
    });
  } else {
    $('#passwordFail').show();
  }
});
