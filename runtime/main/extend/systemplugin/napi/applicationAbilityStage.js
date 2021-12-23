import { abilityStageContextClass } from "./application/abilityContext"

export function mockAbilityStage(){
    const AbilityStageClass = class AbilityStage{
        constructor() {
            console.warn('application.AbilityStage.constructor interface mocked in the Previewer. How this interface works on' +
              ' the Previewer may be different from that on a real device.');
            this.context = new abilityStageContextClass();
            this.onCreate = function () {
                console.warn("application.AbilityStage.onCreate interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            }
        }
    }
    return new AbilityStageClass();
}