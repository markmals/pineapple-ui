import { ReactNode } from "react"

export type UIProps = Partial<LifecycleProps & StyleProps>

export interface LifecycleProps {
    onAppear: (perform: () => void) => void
    onDisappear: (perform: () => void) => void
    // task: (perform: () => Promise<void>) => void
    // task: <T>(id: T, perform: () => Promise<void>) => void
}

export interface StyleProps {
    opacity: number
    hidden: boolean
    disabled: boolean
}

export interface ReadctionProps {
    /** Marks the component as containing sensitive, private user data. */
    privacySensitive: boolean
    /** Adds a reason to apply a redaction to this component tree. */
    redacted: RedactionReason
    /** Removes any reason to apply a redaction to this component tree. */
    unredacted: boolean
}

export enum RedactionReason {
    /** Displayed data should appear as invalidated and pending a new update. */
    Invalidated,
    /** Displayed data should appear as generic placeholders. */
    Placeholder,
    /** Displayed data should be obscured to protect private information. */
    Privacy,
}

export enum ButtonRole {
    Cancel,
    Destructive,
}

export interface ButtonStyleConfiguration {
    label: ReactNode
    isPressed: boolean
    role: ButtonRole
}

export interface ButtonStyle {
    createElement(configuration: ButtonStyleConfiguration): ReactNode
}

export interface ButtonStyleProps {
    buttonStyle: ButtonStyle
}
