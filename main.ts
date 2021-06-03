input.onButtonPressed(Button.A, function () {
    while (true) {
        music.playMelody("A A A G A B C5 B ", 120)
        break;
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(1000)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.NorthWest)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("P1")
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . #
            . . # . .
            . . # . .
            . . # . .
            # . # . #
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.showLeds(`
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            # . # . #
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.showLeds(`
            . # # # .
            . # # # .
            . . # . .
            # . # . #
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
basic.showString("EU SOU")
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Pitchfork)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        # . # . #
        . . # . .
        `)
}
