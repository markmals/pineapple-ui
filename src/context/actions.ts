import { createContext, useContext } from "react"

const DismissContext = createContext(undefined)

export function useDismiss() {
    return useContext(DismissContext)
}
