
const socket = io();
// connected to the server
socket.on('connect', () => {
console.log(`Connected to server`);
});

$('#vote-Form').on('submit', (event) => {
    event.preventDefault();
    let voteCasted = $(`input[name=group1]:checked`).val();
    socket.emit('vote', {vote: voteCasted});
    let voteForDB = $(`input[name=group1]:checked`).attr('id');
    currentUserId = localStorage.getItem("currentUserId");
    let newObj = {
        UserId: currentUserId,
        voteCast: voteForDB
    }
    $.ajax('/polls/update/' + currentUserId, {
        type: 'PUT',
        data: newObj
    }).then(function(results){
        console.log(results)
    })
});

//disconnected from the server
socket.on('disconnect', () => {
console.log(`disconnected from server`);
});

