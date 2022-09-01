import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    // StrictModeとは、"アプリケーションの潜在的な問題点を洗い出すためのツール"
    <StrictMode>
        <App />
    </StrictMode>
);
