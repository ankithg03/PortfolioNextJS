import React, {useEffect, useState} from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import HCaptcha from '@hcaptcha/react-hcaptcha';


{/* notice */}
const DevelopmentNotice: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);

    useEffect(() => {
        const hasSeenNotice = localStorage.getItem('developmentNotice');

        if (!hasSeenNotice) {
            setShowPopup(true);
        }
    }, []);

    const handleHidePopup = () => {
        localStorage.setItem('developmentNotice', 'true');
        setShowPopup(false);
    };

    const handleVerify = (token: string) => {
        // Verification logic here
        if (token) {
            setIsVerified(true);
        }
    };

    if (!showPopup) {
        return null;
    }

    return (
       <></>
    );
};

export default DevelopmentNotice;
