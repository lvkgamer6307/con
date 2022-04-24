radio.setGroup(69)
basic.forever(function () {
    radio.sendValue("mgx", input.acceleration(Dimension.X))
    radio.sendValue("mgy", input.acceleration(Dimension.Y))
    radio.sendValue("mgz", input.acceleration(Dimension.Z))
})
