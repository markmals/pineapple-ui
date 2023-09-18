import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Examples } from "./Showcase/Examples.tsx"
import "./styles/index.css"

let root = createRoot(document.getElementById("root")!)

root.render(
    <StrictMode>
        <Examples />
    </StrictMode>,
)
