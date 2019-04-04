const { server } = require('../app'); 

const socketIO = require('socket.io');

// module.exports = () => {
    
//     const io = socketIO(server);

//     return {
//         io: io
//     };
// };
const io = socketIO(server);

module.exports = {
    io: io
}
