input.onButtonPressed(Button.A, function () {
    Number_1 += 1
    basic.showNumber(Number_1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Number_1)
    basic.showString("+")
    basic.showNumber(Number_2)
    basic.showString("=")
    basic.showNumber(Number_1 + Number_2)
})
input.onButtonPressed(Button.B, function () {
    Number_1 += -1
    basic.showNumber(Number_1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Number_1)
    basic.showString("-")
    basic.showNumber(Number_2)
    basic.showString("=")
    basic.showNumber(Number_1 - Number_2)
})
let Number_2 = 0
let Number_1 = 0
Number_1 = 0
Number_2 = 0
