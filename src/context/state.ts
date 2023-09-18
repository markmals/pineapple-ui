import { createContext, useContext } from "react"

const IsEnabledContext = createContext(true)

/**
 * A Boolean value that indicates whether the view associated with this environment allows user interaction.
 */
export function useIsEnabled() {
    return useContext(IsEnabledContext)
}
