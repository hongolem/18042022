// dodělat odesílání hodnoty (Decision/Answer); předělat Server podle klienta
radio.setGroup(100)
let Decision = ""
let Server_running = false
let Answer = 64
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    if (receivedNumber == 1) {
        basic.showString("Start!")
        Server_running = true
        radio.sendString("" + control.deviceSerialNumber())
    } else if (receivedNumber == 0) {
        basic.showString("End!")
        Server_running = false
        radio.sendValue("" + control.deviceSerialNumber(), Answer)
    }
    
})
function Voting(Decision: string) {
    if (Server_running == true) {
        basic.showString(Decision)
    } else if (Server_running == false) {
        basic.showString("Hlasování nezačalo!")
    }
    
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    Voting("A")
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    Voting("B")
})
input.onPinReleased(TouchPin.P0, function on_pin_released_p0() {
    Voting("C")
})
input.onPinReleased(TouchPin.P1, function on_pin_released_p1() {
    Voting("D")
})
input.onPinReleased(TouchPin.P2, function on_pin_released_p2() {
    Voting("E")
})
