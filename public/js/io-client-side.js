
const socket = io();
// connected to the server
socket.on('connect', () => {
  console.log(`Connected to server`);
});

$('#vote-Form').on('submit', (event) => {

  event.preventDefault();
  const voteCasted = $(`input[name=group1]:checked`).val();
  socket.emit('vote', {vote: voteCasted});
  const voteForDB = $(`input[name=group1]:checked`).attr('id');
  currentUserId = localStorage.getItem('currentUserId');
  const newObj = {
    UserId: currentUserId,
    voteCast: voteForDB,
  };
  location.href='/results';
  $.ajax('/polls/update/' + currentUserId, {
    type: 'PUT',
    data: newObj,
  }).then(function(results) {
    console.log(results);
    
  });

});

//  disconnected from the server
socket.on('disconnect', () => {
  console.log(`disconnected from server`);
});



