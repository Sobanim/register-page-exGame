'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import CommonInput from "@/app/components/commonInput/commonInput";
import UserIcon from "@/app/components/icons/userIcon";
import EmailIcon from "@/app/components/icons/emailIcon";
import ProfileIcon from "@/app/components/icons/profileIcon";
import PasswordIcon from "@/app/components/icons/passwordIcon";
import RegisterBtn from "@/app/components/registerBtn/registerBtn";
import RegisterCheckbox from "@/app/components/registerCheckbox/registerCheckbox";
import EmailInput from "@/app/components/emailInput/emailInput";
import styles from './registerForm.module.scss';

const formSchema = z.object({
    userId: z.string()
        .min(4, "User ID must be at least 4 characters")
        .max(12, "User ID cannot exceed 12 characters"),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .max(12, "Password cannot exceed 12 characters")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
    accountName: z.string()
        .min(4, "Account name must be at least 4 characters")
        .max(12, "Account name cannot exceed 12 characters"),
    email: z.string()
        .min(4, "Email must be at least 4 characters")
        .max(12, "Email cannot exceed 12 characters")
        .email("Invalid email format"),
    verificationCode: z.string()
        .min(4, "Verification code must be at least 4 characters")
        .max(12, "Verification code cannot exceed 12 characters"),
    terms: z.boolean().refine(val => val, "You must accept the Terms of Services"),
    privacy: z.boolean().refine(val => val, "You must accept the Privacy Policy"),
    promotional: z.boolean().optional()
});

export type FormData = z.infer<typeof formSchema>;

interface RegisterFormProps {
    onSubmit: (data: FormData) => void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    });

    return (
        <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <CommonInput
                    label="User ID"
                    inputType="text"
                    icon={<UserIcon/>}
                    {...register("userId")}
                />
                {errors.userId && (
                    <p className={styles["error-message"]}>{errors.userId.message}</p>
                )}
            </div>

            <div>
                <CommonInput
                    label="Password"
                    inputType="password"
                    hint="8 characters minimum"
                    icon={<PasswordIcon/>}
                    {...register("password")}
                />
                {errors.password && (
                    <p className={styles["error-message"]}>{errors.password.message}</p>
                )}
            </div>

            <div>
                <CommonInput
                    label="Account Name"
                    inputType="text"
                    hint="Visible nickname for your profile"
                    icon={<ProfileIcon/>}
                    {...register("accountName")}
                />
                {errors.accountName && (
                    <p className={styles["error-message"]}>{errors.accountName.message}</p>
                )}
            </div>

            <div>
                <EmailInput />
                {errors.email && (
                    <p className={styles["error-message"]}>{errors.email.message}</p>
                )}
            </div>

            <div>
                <CommonInput
                    label="Verification Code"
                    inputType="text"
                    icon={<EmailIcon/>}
                    {...register("verificationCode")}
                />
                {errors.verificationCode && (
                    <p className={styles["error-message"]}>{errors.verificationCode.message}</p>
                )}
            </div>

            <div className={styles['checkboxes']}>
                <div>
                    <RegisterCheckbox id={'terms'} {...register("terms")}>
                        <span>[Required] I read the <Link href="#">Terms of Services</Link> and I agree to the terms.</span>
                    </RegisterCheckbox>
                    {errors.terms && (
                        <p className={styles["error-message"]}>{errors.terms.message}</p>
                    )}
                </div>

                <div>
                    <RegisterCheckbox id={'privacy'} {...register("privacy")}>
                        <span>[Required] I read the <Link href="#">Privacy Policy</Link> and I agree to the terms.</span>
                    </RegisterCheckbox>
                    {errors.privacy && (
                        <p className={styles["error-message"]}>{errors.privacy.message}</p>
                    )}
                </div>

                <RegisterCheckbox id={'promotional'} {...register("promotional")}>
                    <span>[Optional] I would like to receive promotional emails.</span>
                </RegisterCheckbox>
            </div>

            <RegisterBtn type="submit" text='Create Account'/>
        </form>
    );
}
