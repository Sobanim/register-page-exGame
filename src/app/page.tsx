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


export default function RegisterPage() {
  return (
    <div className={styles['wrapper']}>
        <div className={styles['container']}>
            <div className={styles['register-image']}>
                <Image src="/register.jpg" width={790} height={1020} alt="Registration Image"/>
            </div>
            <div className={styles['register-section']}>
                <div className={styles['heading']}>
                    <h1>Create an account<span>.</span></h1>
                    <p>Already have an account? <Link href="#">Sign in</Link></p>
                </div>

                <form>
                    <CommonInput
                        label="User ID"
                        inputType="text"
                        icon={<UserIcon/>}/>
                    <CommonInput
                        label="Password"
                        inputType="password"
                        hint="8 chatacters minimum"
                        icon={<PasswordIcon/>}/>
                    <CommonInput
                        label="Account Name"
                        inputType="text"
                        hint="Visible nickname for your profile"
                        icon={<ProfileIcon/>}/>
                    <EmailInput />
                    <CommonInput
                        label="Verification Code"
                        inputType="text"
                        icon={<EmailIcon/>}/>

                    <div className={styles['checkboxes']}>
                        <RegisterCheckbox id={'terms'} required>
                            <span>[Required] I read the <Link href="#">Terms of Uservises</Link> and I agree to the terms.</span>
                        </RegisterCheckbox>

                        <RegisterCheckbox id={'privacy'} required>
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
            </div>
        </div>

    </div>
  );
}
