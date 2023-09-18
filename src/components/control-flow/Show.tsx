import { ReactNode, useMemo } from "react"
import { Item } from "./Item"

type RenderChildren<T> = (value: T) => ReactNode

export namespace Show {
    export type Props<T> = {
        when?: T
        children: ReactNode | RenderChildren<T>
        fallback?: ReactNode
    }
}

export function Show<T>({ when: shouldShow, fallback, children }: Show.Props<T>) {
    return useMemo(() => {
        if (shouldShow) {
            if (typeof children === "function") {
                return <Item value={shouldShow} children={children} />
            }

            return children
        }

        return fallback
    }, [shouldShow, fallback, children])
}
