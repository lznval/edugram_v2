import React, {useState, useEffect} from 'react';
import {
    Button,
    DialogContainer,
    PromoCodeContainer,
    PromoCodeInput,
    Image,
    DialogWidgetWrapper,
    Close
} from "./style";

interface DialogWidgetProps {
    backgroundColor: string;
    bannerImageSrc: string;
    promoCode: string;
    partnerWebsiteUrl: string;
    delay: number;
}

const DialogWidget: React.FC<DialogWidgetProps> = ({
                                                       backgroundColor,
                                                       bannerImageSrc,
                                                       promoCode,
                                                       partnerWebsiteUrl,
                                                       delay,
                                                   }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [promocodeValue, setPromocodeValue] = useState<string>(promoCode);
    const [copyText, setCopyText] = useState<string>('Copy Promo Code');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay || 5000); // Задержка по умолчанию: 5 секунд

        return () => {
            clearTimeout(timer);
        };
    }, [delay]);

    const handleCopyClick = () => {
        if (promocodeValue) {
            navigator.clipboard.writeText(promocodeValue).then(function () {
                setCopyText('Copied')
            }).catch(e => console.log(e))
        }
    };

    const handleGoToPartnerWebsite = () => {
        if (partnerWebsiteUrl) {
            window.open(partnerWebsiteUrl, '_blank');
        }
    };

    const handleShowDialog = () => {
        setShowModal(!showModal)
    };

    const handleChangeInput = (value: string) => {
        setPromocodeValue(value)
    };

    return (
        <>
            {isVisible ?
                (<>
                    <DialogWidgetWrapper onClick={handleShowDialog}>
                        <span>Banner</span>
                    </DialogWidgetWrapper>
                    {showModal ? (
                        <DialogContainer backgroundColor={backgroundColor}>
                            <Close onClick={handleShowDialog}>&#10006;</Close>
                            <Image src={bannerImageSrc || 'https://via.placeholder.com/300x200'} alt="Partner Banner"/>
                            <PromoCodeContainer>
                                <PromoCodeInput value={promocodeValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInput(e.target.value)}/>
                                <Button onClick={handleCopyClick}>{copyText}</Button>
                            </PromoCodeContainer>
                            <Button onClick={handleGoToPartnerWebsite}>Go to partners website!</Button>
                        </DialogContainer>
                    ): ''}
                </>) : null}
        </>
    );
};

export default DialogWidget;

