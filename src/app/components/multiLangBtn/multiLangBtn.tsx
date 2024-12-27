'use client';
import React, {useState} from 'react';
import styles from './multiLangBtn.module.scss'
import Image from "next/image";

type Language = 'EN';

const MultiLangBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<Language>('EN');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const langFlags = {
        EN: '/eng.png',
    }
    return (
        <div className={styles['multiLang-btn']}>
            <button onClick={toggleMenu} className={styles['selected-lang']}>
                <Image src={langFlags[selectedLanguage]} width={20} height={15} alt='EN' />
            </button>
        </div>
    );
};

export default MultiLangBtn;