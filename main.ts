radio.setGroup(100)
let Lock = ""
let Server_running = false
radio.onReceivedString(function on_received_string(receivedString: string) {
    
    basic.showString(receivedString)
    Server_running = true
})
function Voting(Decision: string) {
    
    if (Server_running == true) {
        Lock = Decision
        basic.showString(Lock)
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
