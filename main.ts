// Při zmáčknutí tlačítka A na serveru se odešle číslo 1,
//  při kterém se u klienta povolí hlasování (možnosti od A do E), zobrazí "Start!",
//  pošle se do serveru hodnota a z ní se vyčte sériové číslo, které se uloží do listu sériových čísel,
//  poté se server i klient přehodí na jinou rádiovou skupinu (101) a server klientovi pošle zprávu o příjmutí
//  a oba microbity se znovu přehodí na původní rádio skupinu (100).
// Do té doby, pokud zmáčkne tlačítko nebo pin, tak se zobrazí "Hlasování nezačalo!".
// Hlasování jde vynulovat pomocí zmáčknutí loga, ale hlasování se neukončí.
// Zmáčknutím tlačítka B na serveru se odešle číslo 0, které na klientovi zobrazí "End!" a uzamkne hlasování
//  a určí hodnotu odpovědi (64-69 od "", "A" až po "E") na základě jaká je proměnná Decision
//  a danná odpověď se odešle pod proměnnou 'Answer' s jménem value "answer".
// V serveru se přičtou body podle příjmuté hodnoty (64-69) k jednotlivým proměnným,
//  které se po půl sekundové pauze (kvůli jistotě započtení všech hlasů), printnou do konzole.
radio.setGroup(100)
radio.setTransmitSerialNumber(true)
let Decision = ""
let Server_running = false
let Answer = 64
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let Answer: number;
    
    if (receivedNumber == 1) {
        Server_running = true
        basic.showString("Start!")
        radio.sendValue("serial_number", 0)
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
