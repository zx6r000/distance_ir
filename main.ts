let valeure = 0
datalogger.setColumnTitles(
"time",
"Distance"
)
let time = ""
let heure = 0
let minute = 0
let secondes = 0
let comp = 0
basic.forever(function () {
    secondes += 1
    if (secondes == 60) {
        minute += 1
        secondes = 0
    }
    if (minute == 60) {
        heure += 1
        minute = 0
    }
    time = "" + convertToText(heure) + ":" + convertToText(minute) + ":" + convertToText(secondes)
    valeure = Math.map(pins.analogReadPin(AnalogPin.P0), 250, 730, 0, 25)
    if (input.lightLevel() > 10) {
        led.plotBarGraph(
        valeure,
        0
        )
    }
    if (comp == 10) {
        datalogger.log(
        datalogger.createCV("time", time),
        datalogger.createCV("Distance", pins.analogReadPin(AnalogPin.P0))
        )
        comp = 0
    } else {
        comp += 1
    }
    basic.pause(1000)
})
