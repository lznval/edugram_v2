import React from 'react';
import ReactDOM from 'react-dom/client';
import DialogWidget from "./components/dialog";
import FormWidget from "./components/form";

const dialog = ReactDOM.createRoot(
    document.getElementById('dialog') as HTMLElement
);

const form = ReactDOM.createRoot(
    document.getElementById('form') as HTMLElement
);

dialog.render(
    <React.StrictMode>
        <DialogWidget
            backgroundColor="#ffcccc"
            bannerImageSrc="https://via.placeholder.com/300x200"
            promoCode="COUPON123"
            partnerWebsiteUrl="https://partner-website.com"
            delay={1000}
        />
    </React.StrictMode>
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
