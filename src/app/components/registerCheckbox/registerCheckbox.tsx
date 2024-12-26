import React from 'react';
import styles from './registerCheckbox.module.scss';

type RegisterCheckboxProps = {
    id: string;
    children?: React.ReactNode;
    required?: boolean;
};

const RegisterCheckbox = ({id, required, children}: RegisterCheckboxProps) => {
    return (
        <div className={styles['checkbox-container']}>
            <input type="checkbox" name={id} id={id} required={required} />
            <label htmlFor={id}>{children}</label>
        </div>
    );
};

export default RegisterCheckbox;