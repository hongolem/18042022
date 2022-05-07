#dodělat odesílání hodnoty (Decision/Answer); předělat Server podle klienta

radio.set_group(100)

Decision = ""
Server_running = False
Answer = 64

def on_received_number(receivedNumber):
    global Server_running
    if receivedNumber == 1:
        basic.show_string("Start!")
        Server_running = True
        radio.send_string(str(control.device_serial_number()))
    elif receivedNumber == 0:
        basic.show_string("End!")
        Server_running = False
        radio.send_value(str(control.device_serial_number()), Answer)
radio.on_received_number(on_received_number)

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