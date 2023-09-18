import { ReadonlySignal } from "@preact/signals-react"
import { Context, useContext, useEffect } from "react"

export function onChange<Value>(value: Value, action: () => void) {
    useEffect(action, [value])
}

export function onContextChange<Value>(context: Context<Value>, action: (value: Value) => void) {
    let c = useContext(context)
    useEffect(() => action(c), [c])
}

export function onReceive<Value>(value: ReadonlySignal<Value>, action: (value: Value) => void) {
    useEffect(() => value.subscribe(action), [])
}
