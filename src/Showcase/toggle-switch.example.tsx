import { useSignal, useSignalEffect } from "@preact/signals-react"
import { Toggle } from "../components"
import { ExampleCard } from "./Examples"

export function ToggleSwitchExample() {
    let $vibrateOnRing = useSignal(true)

    useSignalEffect(() => console.log($vibrateOnRing.value))

    return (
        <ExampleCard title="Toggle (switch style)">
            <Toggle isOn={$vibrateOnRing}>Vibrate on Ring</Toggle>
            <button style={{ width: "fit-content" }} onClick={() => ($vibrateOnRing.value = false)}>
                Untoggle
            </button>
        </ExampleCard>
    )
}
