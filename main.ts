// increase value
// 
input.onButtonPressed(Button.A, function () {
    Number_1 += 1
    basic.showNumber(Number_1)
})
input.onButtonPressed(Button.AB, function () {
    if (Number_2 == 0) {
        basic.showString("+")
        Number_2 = Number_1
        Number_1 = 0
    }
    if (Number_1 != 0) {
        basic.showString("=")
        basic.showNumber(Number_1 + Number_2)
    }
    if (Number_1 == 0) {
        basic.showNumber(Number_1)
        basic.showString("=")
        basic.showNumber(Number_1 + Number_2)
    }
})
// decrease value
// 
input.onButtonPressed(Button.B, function () {
    Number_1 += -1
    basic.showNumber(Number_1)
})
input.onGesture(Gesture.Shake, function () {
    if (Number_2 == 0) {
        basic.showString("-")
        Number_2 = Number_1
        Number_1 = 0
    }
    if (Number_1 != 0) {
        basic.showString("=")
        basic.showNumber(Number_2 - Number_1)
    }
    if (Number_1 == 0) {
        basic.showNumber(Number_1)
        basic.showString("=")
        basic.showNumber(Number_2 - Number_1)
    }
})
// show image initalize #1 #2
let Number_2 = 0
let Number_1 = 0
basic.showIcon(IconNames.TShirt)
Number_1 = 0
Number_2 = 0
