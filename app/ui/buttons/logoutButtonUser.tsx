'use client';
import { useRouter } from "next/navigation";
import styles from '@/app/styles/navigation/Navigation.module.css';


export default function LogoutButtonUser() {
  const router = useRouter();

  const handleLogout = async () => {

    const res = await fetch("/api/Authentication/logout", {
      method: "GET",
      cache: 'no-store',
    });

    const result = await res.json();
    console.log(result)

    if (!res.ok) throw new Error("Failed to logout");
    router.refresh();
    router.push('/')
  };


  return (
    <a href='/'>
      <div className={`${styles['link']}`}>
        <button onClick={handleLogout}>
          <div >Logout</div>
        </button>
      </div>
    </a>
  );
};
