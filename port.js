// Code to check Serial Port ----------------------------------------------->

// Import library for serial communication with micro:bit
const serialPort = require("serialport");

// List all devices connected with their COM port
serialPort.list(function (err, ports) {
    ports.forEach(function(port) {
        console.log(port.comName);
        console.log(port.pnpId);
    });
});