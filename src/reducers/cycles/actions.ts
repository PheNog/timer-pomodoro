import { Cycle } from "./reducer";

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
    MARK_CURRENT_CYCLE_AS_RESOLVED = 'MARK_CURRENT_CYCLE_AS_RESOLVED'
}

export function createNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle
        }
    }
}

export function interruptCurrentCycleAction() {
    return {
        type: ActionTypes.INTERRUPT_CURRENT_CYCLE
    }
}
export function markAsResolvedCycleAction() {
    return {
        type: ActionTypes.MARK_CURRENT_CYCLE_AS_RESOLVED
    }
}