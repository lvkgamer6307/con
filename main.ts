radio.setGroup(69)
basic.forever(function () {
    radio.sendValue("mgx", input.acceleration(Dimension.X))
    radio.sendValue("mgy", input.acceleration(Dimension.Y))
    radio.sendValue("mgz", input.acceleration(Dimension.Z))
    if (input.acceleration(Dimension.X) < input.acceleration(Dimension.Y)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (input.acceleration(Dimension.Y) < input.acceleration(Dimension.X)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
