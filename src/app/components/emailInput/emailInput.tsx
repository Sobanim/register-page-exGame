'use client';
import React, {useEffect, useState} from 'react';
import CommonInput from "@/app/components/commonInput/commonInput";
import EmailIcon from "@/app/components/icons/emailIcon";
import styles from './emailInput.module.scss'

const EmailInput = ({error}: {error?: string}) => {
    const [time, setTime] = useState(60)
    const [isRunning, setIsRunning] = useState(false)

    const handleSendVerificationCode = () => {
        setTime(60)
        setIsRunning(true);
    }

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(time - 1);
                if (time === 0) {
                    setIsRunning(false);
                }
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    return (
        <>
            <div className={styles['email-wrapper']}>
                <CommonInput
                    htmlName='email'
                    label="Email"
                    inputType="email"
                    icon={<EmailIcon/>}/>
                <button type="button"
                        className={styles['email-btn']}
                        onClick={handleSendVerificationCode}
                        disabled={isRunning}>
                    {isRunning ? `Resend (${time.toString()}s)` : 'Send Verification Code'}
                    {time === 0 ? '' : ''}
                </button>

            </div>
            <div className={styles['email-error']}>
                {error && <span className="error">{error}</span>}
            </div>
        </>
    );
};

export default EmailInput;