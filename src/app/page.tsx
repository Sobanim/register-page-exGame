'use client';
import Image from "next/image";
import styles from './page.module.scss'
import Link from "next/link";
import MultiLangBtn from "@/app/components/multiLangBtn/multiLangBtn";
import RegisterForm from "@/app/components/registerForm/registerForm";



export default function RegisterPage() {
    const handleSubmit = async (data: FormData) => {
        console.log(data);
    };
  return (
    <div className={styles['container']}>
        <div className={styles['register-image']}>
            <Image src="/register.jpg" fill sizes="50vw" style={{objectFit: 'contain'}} alt="Registration Image"/>
        </div>
        <div className={styles['register-section']}>
            <div className={styles['heading']}>
                <h1>Create an account<span>.</span></h1>
                <p>Already have an account? <Link href="#">Sign in</Link></p>
            </div>

            <RegisterForm onSubmit={handleSubmit} />

            <div className={styles['promo-support']}>
                <Link href={"#"} className={styles['code']}>
                    <Image src='/support-icon.png' width={15} height={15} alt="Have a promo code?"/>
                    Have a Promo Code?
                </Link>
                <div>
                    <Link href={"#"}>Contact Support</Link>
                </div>
            </div>

            <MultiLangBtn />

        </div>

    </div>
  );
}
