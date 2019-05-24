// Send messages according to the action on micro:bit
input.onButtonPressed(Button.A, function () {
    serial.writeLine("PAUSE")
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("MUTE")
})
input.onGesture(Gesture.TiltLeft, function () {
    serial.writeLine("PREVIOUS")
})
input.onGesture(Gesture.TiltRight, function () {
    serial.writeLine("NEXT")
})
input.onGesture(Gesture.LogoUp, function () {
    serial.writeLine("DOWN")
})
input.onGesture(Gesture.LogoDown, function () {
    serial.writeLine("UP")
})

// Handle messages received from the server and display images on micro:bit LED accordingly
basic.forever(function () {
    switch (serial.readString()) {
        case 'PLAYING':
            basic.showLeds(`
            . . # . .
            . . # # .
            . . # . #
            # # # . .
            # # # . .
            `)
            break;
        case 'PLAY':
            basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
            break;
        case 'PAUSE':
            basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
            break;
        case 'MUTE':
            basic.showLeds(`
            # . # . .
            . # # # .
            . . # . #
            # # # # .
            # # # . #
            `)
            break;
        case 'UNMUTE':
            basic.showLeds(`
            . . # . .
            . . # # .
            . . # . #
            # # # . .
            # # # . .
            `)
            break;
        case 'PREVIOUS':
            basic.showLeds(`
            # . . # .
            # . # # .
            # # # # .
            # . # # .
            # . . # .
            `)
            break;
        case 'NEXT':
            basic.showLeds(`
            . # . . #
            . # # . #
            . # # # #
            . # # . #
            . # . . #
            `)
            break;
        case 'UP':
            basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
            break;
        case 'DOWN':
            basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
            break;
        case 'CLEAR':
            basic.clearScreen()
            break;
    }
})
