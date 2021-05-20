basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 23) {
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() > 25) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Happy)
    } else {
        if (input.temperature() >= 23 && input.temperature() <= 25) {
            basic.showNumber(input.temperature())
        }
    }
})
