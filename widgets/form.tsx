import React from "react";
import ReactDOM from "react-dom/client";
import FormWidget from "./components/form";
const form = ReactDOM.createRoot(
    document.getElementById('form') as HTMLElement
);
form.render(
    <React.StrictMode>
        <FormWidget
            backgroundColor="#f0f0f0"
            buttonColor="blue"
            textColor="blue"
        />
    </React.StrictMode>
);
