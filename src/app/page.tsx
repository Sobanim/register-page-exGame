import styles from "./page.module.css";
import CommonInput from "@/app/components/commonInput";

export default function RegisterPage() {
  return (
    <>
      <CommonInput label="Email" inputType="email" hint="Enter your email" />
    </>
  );
}
