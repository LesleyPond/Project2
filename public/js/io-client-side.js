import io from 'socket.io';
const socket = io();
// connected to the server
socket.on('connect', () => {
console.log(`Connected to server`);
});

//disconnected from the server
socket.on('disconnect', () => {
console.log(`disconnected from server`);
});