radio.set_group(100)

Lock = ""
Server_running = False

def on_received_string(receivedString):
    global Server_running
    basic.show_string(receivedString)
    Server_running = True
radio.on_received_string(on_received_string)

def Voting(Decision):
    global Lock
    if Server_running == True:
        Lock = Decision
        basic.show_string(Lock)
    elif Server_running == False:
        basic.show_string("Hlasování nezačalo!")

def on_button_pressed_a():
    Voting("A")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Voting("B")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_released_p0():
    Voting("C")
input.on_pin_released(TouchPin.P0, on_pin_released_p0)

def on_pin_released_p1():
    Voting("D")
input.on_pin_released(TouchPin.P1, on_pin_released_p1)

def on_pin_released_p2():
    Voting("E")
input.on_pin_released(TouchPin.P2, on_pin_released_p2)