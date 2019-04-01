
const socket = io();
// connected to the server
socket.on('connect', () => {
console.log(`Connected to server`);
});

$('#vote-Form').on('submit', (event) => {
    event.preventDefault();
    var voteCasted = $(`input[name=group1]:checked`).val();
    socket.emit('vote', {vote: voteCasted});
});

//disconnected from the server
socket.on('disconnect', () => {
console.log(`disconnected from server`);
});

