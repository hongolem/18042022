radio.set_group(100)

Lock = ""
Server_running = False

def on_received_string(receivedString):
    global Server_running
    basic.show_string(receivedString)
    Server_running = True
radio.on_received_string(on_received_string)

def on_button_pressed_a():
    global Lock
    if Lock != "A" and Server_running == True:
        radio.send_value("answer", 65)
        Lock = "A"
        basic.show_string(Lock)
    elif Lock == "A" and Server_running == True:
        basic.show_string(Lock)
    elif Server_running == False:
        basic.show_string("Hlasování nezačalo!")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Lock
    if Lock != "B" and Server_running == True:
        radio.send_value("answer", 66)
        Lock = "B"
        basic.show_string(Lock)
    elif Lock == "B" and Server_running == True:
        basic.show_string(Lock)
    elif Server_running == False:
        basic.show_string("Hlasování nezačalo!")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_released_p0():
    global Lock
    if Lock != "C" and Server_running == True:
        radio.send_value("answer", 67)
        Lock = "C"
        basic.show_string(Lock)
    elif Lock == "C" and Server_running == True:
        basic.show_string(Lock)
    elif Server_running == False:
        basic.show_string("Hlasování nezačalo!")
input.on_pin_released(TouchPin.P0, on_pin_released_p0)

def on_pin_released_p1():
    global Lock
    if Lock != "D" and Server_running == True:
        radio.send_value("answer", 68)
        Lock = "D"
        basic.show_string(Lock)
    elif Lock == "D" and Server_running == True:
        basic.show_string(Lock)
    elif Server_running == False:
        basic.show_string("Hlasování nezačalo!")
input.on_pin_released(TouchPin.P1, on_pin_released_p1)

def on_pin_released_p2():
    global Lock
    if Lock != "E" and Server_running == True:
        radio.send_value("answer", 69)
        Lock = "E"
        basic.show_string(Lock)
    elif Lock == "E" and Server_running == True:
        basic.show_string(Lock)
    elif Server_running == False:
        basic.show_string("Hlasování nezačalo!")
input.on_pin_released(TouchPin.P2, on_pin_released_p2)