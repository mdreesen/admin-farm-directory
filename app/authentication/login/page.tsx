import Login from '@/app/ui/forms/authentication/Login';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function Page() {
   

    return (
        <section>
            <Login/>
        </section>
    )
};