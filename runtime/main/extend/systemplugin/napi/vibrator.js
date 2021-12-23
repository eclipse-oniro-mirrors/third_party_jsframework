import { paramMock } from "../utils"

export function mockVibrator() {
  const EffectId = {
    EFFECT_CLOCK_TIMER: "haptic.clock.timer"
  }
  const VibratorStopMode = {
    VIBRATOR_STOP_MODE_TIME: "time",
    VIBRATOR_STOP_MODE_PRESET: "preset"
  }
  const vibrator = {
    vibrate: function (...args) {
      console.warn("vibrator.vibrate interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
          resolve();
        })
      }
    },
    stop: function (...args) {
      console.warn("vibrator.stop interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve) => {
          resolve();
        })
      }
    }
  }
  return vibrator
}