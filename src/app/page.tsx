import CommonInput from "@/app/components/commonInput";
import UserIcon from "@/app/components/icons/userIcon";
import EmailIcon from "@/app/components/icons/emailIcon";
import ProfileIcon from "@/app/components/icons/profileIcon";
import PasswordIcon from "@/app/components/icons/passwordIcon";
import Image from "next/image";
import styles from './page.module.scss'
import Link from "next/link";


export default function RegisterPage() {
  return (
    <div className={styles['wrapper']}>
        <div className={styles['container']}>
            <div>
                <Image src="/register.jpg" width={790} height={1020} alt="Registration Image"/>
            </div>
            <div className={styles['register-section']}>
                <div className={styles['heading']}>
                    <h1>Create an account<span>.</span></h1>
                    <p>Already have an account? <Link href="#">Log in</Link></p>
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
                    {/* TODO Custom email input */}
                    <CommonInput
                        label="Email"
                        inputType="email"
                        icon={<EmailIcon/>}/>
                    <CommonInput
                        label="Verification Code"
                        inputType="text"
                        hint="Enter your email"
                        icon={<EmailIcon/>}/>
                </form>
            </div>
        </div>

    </div>
  );
}
