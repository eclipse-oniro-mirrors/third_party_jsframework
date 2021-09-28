export function mockOhosBatteryinfo() {
  const BatteryPluggedType = {
    NONE: '[PC preview] unknow NONE',
    AC: '[PC preview] unknow AC',
    USB: '[PC preview] unknow USB',
    WIRELESS: '[PC preview] unknow WIRELESS'
  }
  const BatteryChargeState = {
    NONE: '[PC preview] unknow NONE',
    ENABLE: '[PC preview] unknow ENABLE',
    DISABLE: '[PC preview] unknow DISABLE',
    FULL: '[PC preview] unknow FULL'
  }
  const BatteryHealthState = {
    UNKNOWN: '[PC preview] unknow UNKNOWN',
    GOOD: '[PC preview] unknow GOOD',
    OVERHEAT: '[PC preview] unknow OVERHEAT',
    OVERVOLTAGE: '[PC preview] unknow OVERVOLTAGE',
    COLD: '[PC preview] unknow COLD',
    DEAD: '[PC preview] unknow DEAD'
  }
  global.systemplugin.batteryInfo = {
    BatteryPluggedType,
    BatteryChargeState,
    BatteryHealthState,
    batterySOC: "[PC Preview] unknow batterySOC",
    chargingStatus: "[PC Preview] unknow chargingStatus",
    healthStatus: "[PC Preview] unknow healthStatus",
    pluggedType: "[PC Preview] unknow pluggedType",
    voltage: "[PC Preview] unknow voltage",
    technology: "[PC Preview] unknow technology",
    batteryTemperature: "[PC Preview] unknow batteryTemperature",
    isBatteryPresent: "[PC Preview] unknow isBatteryPresent"
  }
}
