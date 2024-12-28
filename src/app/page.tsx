'use client';
import CommonInput from "@/app/components/commonInput/commonInput";
import UserIcon from "@/app/components/icons/userIcon";
import EmailIcon from "@/app/components/icons/emailIcon";
import ProfileIcon from "@/app/components/icons/profileIcon";
import PasswordIcon from "@/app/components/icons/passwordIcon";
import Image from "next/image";
import styles from './page.module.scss'
import Link from "next/link";
import RegisterBtn from "@/app/components/registerBtn/registerBtn";
import RegisterCheckbox from "@/app/components/registerCheckbox/registerCheckbox";
import EmailInput from "@/app/components/emailInput/emailInput";
import MultiLangBtn from "@/app/components/multiLangBtn/multiLangBtn";
import {useActionState} from "react";
import validateForm from "@/app/actions";


export default function RegisterPage() {
    const initialState = {
        message: '',
        errors: {},
    };

    const [state, formAction, pending] = useActionState(validateForm, initialState)

  return (
    <div className={styles['container']}>
        <div className={styles['register-image']}>
            <Image src="/register-img/register.jpg" fill sizes="50vw" style={{objectFit: 'contain'}} alt="Registration Image"/>
        </div>
        <div className={styles['register-section']}>
            <div className={styles['heading']}>
                <h1>Create an account<span>.</span></h1>
                <p>Already have an account? <Link href="#">Sign in</Link></p>
            </div>

            <form action={formAction}>
                {/*{state?.message && (*/}
                {/*    <div className={state.errors ? styles.error : styles.success}>*/}
                {/*        {state.message}*/}
                {/*    </div>*/}
                {/*)}*/}
                <CommonInput
                    htmlName='userId'
                    label="User ID"
                    inputType="text"
                    error={state?.errors?.userId?.[0]}
                    icon={<UserIcon/>}/>
                <CommonInput
                    htmlName='password'
                    label="Password"
                    inputType="password"
                    hint="8 chatacters minimum"
                    error={state?.errors?.password?.[0]}
                    icon={<PasswordIcon/>}/>
                <CommonInput
                    htmlName='accountName'
                    label="Account Name"
                    inputType="text"
                    hint="Visible nickname for your profile"
                    error={state?.errors?.accountName?.[0]}
                    icon={<ProfileIcon/>}/>
                <EmailInput />
                <CommonInput
                    htmlName='verificCode'
                    label="Verification Code"
                    inputType="text"
                    error={state?.errors?.verificCode?.[0]}
                    icon={<EmailIcon/>}/>

                <div className={styles['checkboxes']}>
                    <RegisterCheckbox id={'terms'} error={state?.errors?.terms?.[0]}>
                        <span>[Required] I read the <Link href="#">Terms of Uservises</Link> and I agree to the terms.</span>
                    </RegisterCheckbox>

                    <RegisterCheckbox id={'privacy'} error={state?.errors?.privacy?.[0]}>
                        <span>[Required] I read the <Link href="#">Privacy Policy</Link> and I agree to the terms.</span>
                    </RegisterCheckbox>

                    <RegisterCheckbox id={'promotional'}>
                        <span>[Optional] I would like to receive promotional emails.</span>
                    </RegisterCheckbox>
                </div>

                <RegisterBtn type={"submit"} text={'Create Account'}/>
            </form>

            <div className={styles['promo-support']}>
                <Link href={"#"} className={styles['code']}>
                    <Image src='/support-icon.png' width={15} height={15} alt="Have a promo code?"/>
                    Have a Promo Code?
                </Link>
                <div>
                    <Link href={"#"}>Contact Support</Link>
                </div>
            </div>

            <MultiLangBtn disabled={pending} />

        </div>

    </div>
  );
}
