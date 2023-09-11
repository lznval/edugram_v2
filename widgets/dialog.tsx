import ReactDOM from "react-dom/client";
import React from "react";
import DialogWidget from "./components/dialog";

const dialog = ReactDOM.createRoot(
    document.getElementById('dialog') as HTMLElement
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
