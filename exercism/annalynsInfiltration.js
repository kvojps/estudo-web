export function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake == false) {
      return true
  }
  return false
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake == true) {
      return true
  }
  return false
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (prisonerIsAwake == true && archerIsAwake == false) {
      return true
  }
  return false
}