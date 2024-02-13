import { Metadata } from 'next';
import CardContact from '@/app/ui/dashboard/contact/cardsContact';

export const metadata: Metadata = {
  title: 'Admin Contact',
};

export default async function Page() {

  return (
    <main className="flex flex-col mx-auto">
      <CardContact/>
    </main>
  );
}