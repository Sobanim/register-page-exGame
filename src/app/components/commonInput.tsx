import React from 'react';
import styles from './commonInput.module.scss';

type InputProps = {
    label: string,
    inputType?: HTMLInputElement['type'],
    hint?: string,
    icon?: React.ReactNode,
}

const CommonInput = ({ label, hint, inputType, icon} : InputProps) => {
    return (
        <div className={styles['input-container']}>
            <div className={styles['input-wrapper']}>
                <label htmlFor={label}>{label}</label>
                <input type={inputType} name={label}/>
                <div className={styles['icon-wrapper']}>
                    {icon}
                </div>
            </div>


            {hint ? (
                <div className={styles['hint']}>
                    <span>&#183;</span><p>{hint}</p>
                </div>
            ) : null }
        </div>
    );
};

export default CommonInput;