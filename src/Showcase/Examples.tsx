import { PropsWithChildren } from "react"
import { ToggleSwitchExample } from "./toggle-switch.example"

export function ExampleCard({ children, title }: PropsWithChildren<{ title?: string }>) {
    return (
        <div
            style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                border: "2px solid rgb(0 0 0 / 0.2)",
                borderRadius: "8px",
            }}
        >
            {title && (
                <div style={{ paddingBottom: "0.5rem" }}>
                    <h2
                        style={{
                            fontSize: "1rem",
                            lineHeight: "1.5rem",
                            fontWeight: "600",
                            margin: "0",
                        }}
                    >
                        {title}
                    </h2>
                </div>
            )}

            {children}
        </div>
    )
}

export function Examples() {
    return (
        <div style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h1
                    style={{
                        marginBottom: "0.75rem",
                        textAlign: "center",
                        fontSize: "2.25rem",
                        lineHeight: "2.5rem",
                        fontWeight: "600",
                    }}
                >
                    Pineapple UI Gallery
                </h1>
                <img style={{ height: "3rem" }} alt="" src="pineapple.svg" />
            </div>
            <div
                style={{
                    display: "grid",
                    gridAutoRows: "1fr",
                    gridTemplateColumns: "repeat(auto-fit, 24rem)",
                    justifyContent: "center",
                    gap: "1rem",
                    padding: "2rem",
                }}
            >
                {/* TODO: Automatically import `.example.tsx` components with import.meta.glob */}
                <ToggleSwitchExample />
            </div>
        </div>
    )
}
