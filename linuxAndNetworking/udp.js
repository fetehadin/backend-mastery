const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

socket.bind(8081);

// note
// Explain UDP
// Pros
// Statless, 
// Less bandwidth 
// smaller packets
// Faster to transmit 

// Cons
// no ack, 
// no garenteed delivery, 
// no congestion control
// no ordered packets 
// example comand to run
//echo "hello" | nc -u 127.0.0.1 8081
