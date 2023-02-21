input.onButtonPressed(Button.A, function () {
    påTur = true
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.B, function () {
    påTur = false
    basic.showArrow(ArrowNames.East)
})
let påTur = false
bitbot.setPixelColor(6, 0xFF0000)
bitbot.setPixelColor(11, 0x00FF00)
påTur = false
basic.showArrow(ArrowNames.West)
basic.forever(function () {
    if (påTur) {
        bitbot.goms(BBDirection.Forward, 60, randint(300, 1200))
        if (Math.randomBoolean()) {
            bitbot.rotatems(BBRobotDirection.Left, 60, 400)
        } else {
            bitbot.rotatems(BBRobotDirection.Right, 60, 400)
        }
    }
})
