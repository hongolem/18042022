radio.setGroup(100)
radio.setTransmitSerialNumber(true)
let Decision = ""
let Server_running = false
let Answer = 64
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let Answer: number;
    
    if (receivedNumber == 1) {
        basic.showString("Start!")
        Server_running = true
        radio.sendValue("serial_number", control.deviceSerialNumber())
        radio.setGroup(101)
        radio.onReceivedString(function on_received_string(receivedString: string) {
            radio.setGroup(100)
        })
    } else if (receivedNumber == 0) {
        basic.showString("End!")
        Server_running = false
        if (Decision == "A") {
            Answer = 65
        } else if (Decision == "B") {
            Answer = 66
        } else if (Decision == "C") {
            Answer = 67
        } else if (Decision == "D") {
            Answer = 68
        } else if (Decision == "E") {
            Answer = 69
        }
        
        radio.sendValue("answer", Answer)
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
