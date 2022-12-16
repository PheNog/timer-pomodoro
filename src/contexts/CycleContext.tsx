import { differenceInSeconds } from "date-fns";
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { createNewCycleAction, interruptCurrentCycleAction, markAsResolvedCycleAction } from "../reducers/cycles/actions";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";

interface CycleContextType {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCurrentCycleAsResolved: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleData) => void
    interruptCurrentCycle: () => void
}

interface CyclesContextProviderProps {
    children: ReactNode
}

interface CreateCycleData {
    task: string
    minutesAmount: number
}

export const CycleContext = createContext({} as CycleContextType)

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
    const initializerArg = { //Valores iniciais que são vazios
        cycles: [],
        activeCycleId: null,
      }

    const [cyclesState, dispatch] = useReducer(
        cyclesReducer,
        {
            cycles: [],
            activeCycleId: null,
        },
        () => {
            const storedStateAsJSON = localStorage.getItem('@ignite-timer: cycles-state-1.0.0')
            if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)

            return initializerArg
        }
    )

    const { cycles, activeCycleId } = cyclesState
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)


    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(
                new Date(),
                new Date(activeCycle.startDate)
            )
        }
        return 0
    })

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@ignite-timer: cycles-state-1.0.0', stateJSON)
    }, [cyclesState])

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    const createNewCycle = (data: CreateCycleData) => {
        const id = String(new Date().getTime())
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }
        dispatch(createNewCycleAction(newCycle))
        setAmountSecondsPassed(0)
    }

    function markCurrentCycleAsResolved() {
        dispatch(markAsResolvedCycleAction())
    }

    const interruptCurrentCycle = () => {
        dispatch(interruptCurrentCycleAction())
    }

    return (
        <CycleContext.Provider value={
            {
                activeCycle,
                activeCycleId,
                markCurrentCycleAsResolved,
                amountSecondsPassed,
                setSecondsPassed,
                createNewCycle,
                interruptCurrentCycle,
                cycles
            }
        }>
            {children}
        </CycleContext.Provider>
    )
}
