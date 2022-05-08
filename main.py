radio.set_group(100)
radio.set_transmit_serial_number(True)

Decision = ""
Server_running = False
Answer = 64

def on_received_number(receivedNumber):
    global Server_running
    if receivedNumber == 1:
        basic.show_string("Start!")
        Server_running = True
        radio.send_value("serial_number", control.device_serial_number())
        radio.set_group(101)
        radio.on_received_string(on_received_string)
    elif receivedNumber == 0:
        basic.show_string("End!")
        Server_running = False
        if Decision == "A":
            Answer = 65
        elif Decision == "B":
            Answer = 66
        elif Decision == "C":
            Answer = 67
        elif Decision == "D":
            Answer = 68
        elif Decision == "E":
            Answer = 69
        radio.send_value("answer", Answer)
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    radio.set_group(100)

def Voting(Decision):
    if Server_running == True:
        basic.show_string(Decision)
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