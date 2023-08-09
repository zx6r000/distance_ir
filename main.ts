let time = ""
let valeure = 0
datalogger.setColumnTitles(
"time",
"Distance"
)
let heure = 0
let minute = 0
let secondes = 0
let comp = 0
while (true) {
    valeure = Math.map(pins.analogReadPin(AnalogPin.P0), 250, 730, 0, 25)
    if (input.lightLevel() > 50) {
        led.plotBarGraph(
        valeure,
        0
        )
    }
    basic.pause(500)
    if (comp == 10) {
        datalogger.log(
        datalogger.createCV("Distance", pins.analogReadPin(AnalogPin.P0)),
        datalogger.createCV("time", time)
        )
        comp = 0
    } else {
        comp += 1
    }
}
basic.forever(function () {
    secondes += 1
    if (secondes == 60) {
        minute += 1
    }
    if (minute == 60) {
        heure += 1
    }
    time = "" + heure + ":" + minute + ":" + secondes
    basic.pause(1000)
})
