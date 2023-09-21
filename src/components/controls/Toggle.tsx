import { Signal } from "@preact/signals-react"
import { ReactNode } from "react"
import { Switch } from "react-aria-components"

export namespace Toggle {
    export type Props = {
        isOn: Signal<boolean>
    } & ({ children?: ReactNode } | { children?: string; icon?: string })
}

// TODO: ToggleStyle
// ButtonToggleStyle
// CheckboxToggleStyle
// This is SwitchToggleStyle:

// Do this as a Context provider?
// <ToggleStyle value="checkbox"><Toggle isOn={$isOn}>Wi-Fi</Toggle></ToggleStyle>
// - or -
// <Toggle isOn={$isOn} style="checkbox">Wi-Fi</Toggle>

export function Toggle(props: Toggle.Props) {
    // FIXME: Make the label unclickable
    // I might have to drop into `useSwitch` in order to do that...
    return (
        <Switch
            isSelected={props.isOn.value}
            onChange={isSelected => (props.isOn.value = isSelected)}
            className="toggle"
        >
            <div className="wrapper">
                <span className="knob" />
            </div>
            {props.children}
        </Switch>
    )
}
