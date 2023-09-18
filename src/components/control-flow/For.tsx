import { ReactNode, useMemo } from "react"
import { Identifiable } from "./Identifiable"
import { Item } from "./Item"

type Items<T> = T extends (infer U)[] ? U : never
type RenderChildren<T> = (item: Items<T>, index: number) => ReactNode

export namespace For {
    export type Props<T extends Identifiable[]> = {
        each?: T
        children: RenderChildren<T>
        fallback?: ReactNode
    }
}

export function For<T extends Identifiable[]>({ each, children, fallback }: For.Props<T>) {
    let cache = useMemo(() => new Map<any, JSX.Element>(), [])
    return (
        each?.map((value, index) => {
            // Cache based on the entire value, so when any part of the value changes
            // we update the VNode, instead of just updating the VNode when the id changes
            let cached = cache.get(value)
            if (cached) return cached

            // Key the VNode based off of the id
            let item = <Item {...{ key: value.id.toString(), value, index, children }} />
            cache.set(value, item)
            return item
        }) ?? fallback
    )
}
