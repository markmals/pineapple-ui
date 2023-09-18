import { useMemo } from "react"

export function useSetup<T>(init: () => T): T {
    return useMemo(init, [])
}
