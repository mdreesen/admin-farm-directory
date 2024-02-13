import Link from "next/link";
import styles from "@/app/styles/CreateFarmer.module.css";

export default function Page() {

  return (
    <div className={styles['created']}>
      <span>Farmer has been created!</span>
      <span>Thank You!</span>

      <Link href="/admin/dashboard/create-farmer" className={styles['button']}>Click to Create A Farmer</Link>
    </div>
  )
}