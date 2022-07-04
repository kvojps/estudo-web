export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidityPercentage) {
    if (humidityPercentage > 70) {
        throw new Error('Humidity level must be less than 70')
    }
}

export function reportOverheating(temperature) {
    if (temperature == null) {
        throw new ArgumentError('Sensor is broken')
    }

    else if (temperature > 500) {
        throw new OverheatingError(temperature)
    }
}

export function monitorTheMachine(actions) {
    try {
        actions.check()
    } catch (err) {
        if (err instanceof ArgumentError) {
            actions.alertDeadSensor()
        } else if (err instanceof OverheatingError) {
            if (err.temperature > 600) {
                actions.shutdown()
            } else {
                actions.alertOverheating()
            }
        } else {
            throw err
        }
    }
}