import React from 'react';
import styles from './registerBtn.module.scss';

type RegisterBtnProps = {
    type: 'submit' | 'reset' | 'button',
    text: string
}

const RegisterBtn = ({type, text}: RegisterBtnProps) => {
    return (
        <button type={type} className={styles['register-btn']}>
            {text}
        </button>
    );
};

export default RegisterBtn;