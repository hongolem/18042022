radio.set_group(100)

Lock = ""

def on_button_pressed_a():
    global Lock
    if Lock != "A":
        radio.send_value("answer", 65)
        Lock = "A"
        basic.show_string(Lock)
    elif Lock == "A":
        basic.show_string(Lock)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Lock
    if Lock != "B":
        radio.send_value("answer", 66)
        Lock = "B"
        basic.show_string(Lock)
    elif Lock == "B":
        basic.show_string(Lock)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_released_p0():
    global Lock
    if Lock != "C":
        radio.send_value("answer", 67)
        Lock = "C"
        basic.show_string(Lock)
    elif Lock == "C":
        basic.show_string(Lock)
input.on_pin_released(TouchPin.P0, on_pin_released_p0)

def on_pin_released_p1():
    global Lock
    if Lock != "D":
        radio.send_value("answer", 68)
        Lock = "D"
        basic.show_string(Lock)
    elif Lock == "D":
        basic.show_string(Lock)
input.on_pin_released(TouchPin.P1, on_pin_released_p1)

def on_pin_released_p2():
    global Lock
    if Lock != "E":
        radio.send_value("answer", 69)
        Lock = "E"
        basic.show_string(Lock)
    elif Lock == "E":
        basic.show_string(Lock)
input.on_pin_released(TouchPin.P2, on_pin_released_p2)