let reading = 0
radio.setTransmitSerialNumber(true)
radio.setGroup(4)
led.setBrightness(64)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    radio.sendNumber(reading / 4)
    pins.analogWritePin(AnalogPin.P1, 0)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading < 500) {
        basic.showIcon(IconNames.Umbrella)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P2, 80)
        basic.pause(3000)
        pins.analogWritePin(AnalogPin.P2, 0)
    }
    basic.pause(5000)
})
