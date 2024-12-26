import React from 'react';
import styles from './input.module.scss';

type InputProps = {
    label: string,
    inputType?: HTMLInputElement['type'],
    hint?: string,
    icon?: React.ReactNode,
}

const CommonInput = ({ label, hint, inputType, icon} : InputProps) => {
    return (
        <div className={styles['input-container']}>
            <label>{label}</label>
            <input type={inputType} placeholder={hint} />
        </div>
    );
};

export default CommonInput;