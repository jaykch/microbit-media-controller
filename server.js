// Import library for serial communication with micro:bit through USB
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

// Port ID where micro:bit is connected to the pc
// NOTE: The micro:bit is most likely connected to a different port on your pc so please run yarn port or npm run port
// to determine what port it is connected to in your system
const portID = 'COM3';

// Javascript library to simulate key-presses when an event from micro:bit is received
const robot = require("robotjs");

// Define port with micro:bit baudRate
let port = new SerialPort(portID, {
    baudRate: 115200,
    autoOpen: false
});

// Code to run when port is connected to the server
port.open(function (err) {
    // Handle errors relating to port connection and display them
    if (err) {
        return console.log('Error opening port: ', err.message)
    }

    // Message for successful connection to port
    console.log("Connection to port successful!");
});

// Define parser and pass it through port to read each line sent by micro:bit
const parser = new Readline();
port.pipe(parser);

// Define variable to store value for toggling play and pause
let p = "PAUSE";

// Define variable to store value for toggling mute and unmute
let m = "UNMUTE";

// Socket connection to run after any data is received from micro:bit
parser.on('data', function (data) {

    // Remove spacings from data received through new line method
    let checkedData = data.toString().replace(/\s+/g, "");

    // Run switch statement to handle code received from micro:bit
    switch (checkedData) {
        case 'PAUSE':
            robot.keyTap("audio_pause");
            handlePlay();
            break;
        case 'MUTE':
            robot.keyTap("audio_mute");
            handleMute();
            break;
        case 'PREVIOUS':
            robot.keyTap("audio_prev");
            port.write('PREVIOUS');
            clearScreen();
            break;
        case 'NEXT':
            robot.keyTap("audio_next");
            port.write('NEXT');
            clearScreen();
            break;
        case 'UP':
            robot.keyTap("audio_vol_up");
            port.write('UP');
            clearScreen();
            break;
        case 'DOWN':
            robot.keyTap("audio_vol_down");
            port.write('DOWN');
            clearScreen();
            break;
    }
});

// Function to clear screen after every icon is displayed
function clearScreen() {
    setTimeout(function () {
        port.write('CLEAR');
        setTimeout(function () {
            port.write('PLAYING');
        }, 1000);
    }, 2500);
}

// Function to handle toggling of Play/Pause
function handlePlay() {
    if (p === 'PLAY') {
        p = 'PAUSE';
        port.write(p);
    } else if (p === 'PAUSE') {
        p = 'PLAY';
        port.write(p);
        clearScreen();
    }
}

// Function to handle toggling of Mute/Unmute
function handleMute() {
    if (m === 'MUTE') {
        m = 'UNMUTE';
        port.write(m);
    } else if (m === 'UNMUTE') {
        m = 'MUTE';
        port.write(m);
    }
}

// Code to check Serial Port ----------------------------------------------->

// const serialPort = require("serialport");
//
// serialPort.list(function (err, ports) {
//     ports.forEach(function(port) {
//         console.log(port.comName);
//         console.log(port.pnpId);
//     });
// });