def when_get_started():
    basic.show_icon(IconNames.HEART, 1000)
    led.plot(0, 0)
    # 亮起（0，0）的灯
    basic.pause(1000)
    led.toggle(0, 0)
    led.fade_out()
    # 逐渐熄灭灯光
    basic.pause(1000)
    basic.show_number(0, 100)
    led.fade_in()
    # 逐渐亮起灯光
    basic.pause(input.light_level())
    led.fade_out()
    basic.clear_screen()

def on_button_pressed_a():
    led.fade_in()
    if input.temperature() > 10:
        basic.show_string(">10")
    else:
        basic.show_string("<10")
    basic.pause(100)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for i in range(4):
        basic.show_string("" + str(i))
        basic.show_icon(IconNames.ASLEEP)
        basic.pause(200)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

when_get_started()