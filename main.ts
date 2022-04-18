radio.setGroup(100)
let Lock = ""
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (Lock != "A") {
        radio.sendValue("answer", 65)
        Lock = "A"
        basic.showString(Lock)
    } else if (Lock == "A") {
        basic.showString(Lock)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (Lock != "B") {
        radio.sendValue("answer", 66)
        Lock = "B"
        basic.showString(Lock)
    } else if (Lock == "B") {
        basic.showString(Lock)
    }
    
})
input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    
    if (Lock != "C") {
        radio.sendValue("answer", 67)
        Lock = "C"
        basic.showString(Lock)
    } else if (Lock == "C") {
        basic.showString(Lock)
    }
    
})
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
    
    if (Lock != "D") {
        radio.sendValue("answer", 68)
        Lock = "D"
        basic.showString(Lock)
    } else if (Lock == "D") {
        basic.showString(Lock)
    }
    
})
input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    
    if (Lock != "E") {
        radio.sendValue("answer", 69)
        Lock = "E"
        basic.showString(Lock)
    } else if (Lock == "E") {
        basic.showString(Lock)
    }
    
})
