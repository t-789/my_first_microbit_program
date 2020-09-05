function when_get_started() {
    basic.showIcon(IconNames.Heart, 1000)
    led.plot(0, 0)
    //  亮起（0，0）的灯
    basic.pause(1000)
    led.toggle(0, 0)
    led.fadeOut()
    //  逐渐熄灭灯光
    basic.pause(1000)
    basic.showNumber(0, 100)
    led.fadeIn()
    //  逐渐亮起灯光
    basic.pause(input.lightLevel())
    led.fadeOut()
    basic.clearScreen()
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    led.fadeIn()
    if (input.temperature() > 10) {
        basic.showString(">10")
    } else {
        basic.showString("<10")
    }
    
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    for (let i = 0; i < 4; i++) {
        basic.showString("" + ("" + i))
        basic.showIcon(IconNames.Asleep)
        basic.pause(200)
    }
    basic.clearScreen()
})
when_get_started()
