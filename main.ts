radio.setGroup(100)
let Lock = ""
let Server_running = false
radio.onReceivedString(function on_received_string(receivedString: string) {
    
    basic.showString(receivedString)
    Server_running = true
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (Lock != "A" && Server_running == true) {
        radio.sendValue("answer", 65)
        Lock = "A"
        basic.showString(Lock)
    } else if (Lock == "A" && Server_running == true) {
        basic.showString(Lock)
    } else if (Server_running == false) {
        basic.showString("Hlasování nezačalo!")
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (Lock != "B" && Server_running == true) {
        radio.sendValue("answer", 66)
        Lock = "B"
        basic.showString(Lock)
    } else if (Lock == "B" && Server_running == true) {
        basic.showString(Lock)
    } else if (Server_running == false) {
        basic.showString("Hlasování nezačalo!")
    }
    
})
input.onPinReleased(TouchPin.P0, function on_pin_released_p0() {
    
    if (Lock != "C" && Server_running == true) {
        radio.sendValue("answer", 67)
        Lock = "C"
        basic.showString(Lock)
    } else if (Lock == "C" && Server_running == true) {
        basic.showString(Lock)
    } else if (Server_running == false) {
        basic.showString("Hlasování nezačalo!")
    }
    
})
input.onPinReleased(TouchPin.P1, function on_pin_released_p1() {
    
    if (Lock != "D" && Server_running == true) {
        radio.sendValue("answer", 68)
        Lock = "D"
        basic.showString(Lock)
    } else if (Lock == "D" && Server_running == true) {
        basic.showString(Lock)
    } else if (Server_running == false) {
        basic.showString("Hlasování nezačalo!")
    }
    
})
input.onPinReleased(TouchPin.P2, function on_pin_released_p2() {
    
    if (Lock != "E" && Server_running == true) {
        radio.sendValue("answer", 69)
        Lock = "E"
        basic.showString(Lock)
    } else if (Lock == "E" && Server_running == true) {
        basic.showString(Lock)
    } else if (Server_running == false) {
        basic.showString("Hlasování nezačalo!")
    }
    
})
