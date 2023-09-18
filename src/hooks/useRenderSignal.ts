import { useSignal } from "@preact/signals-react"
import { useEffect } from "react"

export function useRenderSignal<Value>(value: Value) {
    let instance = useSignal(value)

    useEffect(() => {
        if (instance.peek() !== value) {
            instance.value = value
        }
    }, [value])

    return instance
}
