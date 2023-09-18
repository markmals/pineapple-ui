import { useEffect } from "react"

export function onAppear(action: () => void) {
    useEffect(action)
}

export function onDisappear(action: () => void) {
    useEffect(() => action)
}
