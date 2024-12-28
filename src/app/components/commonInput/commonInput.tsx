import React from 'react';
import styles from './commonInput.module.scss';

type InputProps = {
    htmlName: string,
    label: string,
    inputType?: HTMLInputElement['type'],
    hint?: string,
    icon?: React.ReactNode,
    error?: string
}

const CommonInput = ({htmlName, label, hint, inputType, icon, error} : InputProps) => {
    return (
        <div className={styles['input-container']}>
            <div className={styles['input-wrapper']}>
                <label htmlFor={label}>{label}</label>
                <input type={inputType} name={htmlName}/>
                <div className={styles['icon-wrapper']}>
                    {icon}
                </div>
            </div>

            {hint ? (
                <div className={styles['hint']}>
                    <span>&#183;</span><p>{hint}</p>
                </div>
            ) : null }

            {error && <span className={styles['error']}>{error}</span>}
        </div>
    );
};

export default CommonInput;