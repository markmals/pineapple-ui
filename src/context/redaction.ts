import { createContext, useContext } from "react"
import { RedactionReason } from "../types/props"

const RedactionReasonContext = createContext<RedactionReason | null>(null)

/** The current redaction reasons applied to the component tree. */
export function useRedactionReason() {
    return useContext(RedactionReasonContext)
}
