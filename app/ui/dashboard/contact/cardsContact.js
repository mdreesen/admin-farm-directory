import Link from 'next/link';
import { fetchContacts } from '@/app/lib/farmerSearch/data';

export default async function CardContact() {

    const contact = await fetchContacts();

    if (contact.length === 0) return <h2>No Contacts Available</h2>

    const Card = () => contact.map((item, index) => (
        <Link href={`/admin/dashboard/contact/${item?._id}`} key={`${item._id}-${index}`}>
            <div className="transition-all duration-150 flex w-full px-4 py-6 justify-center">
                <div className="flex flex-col w-[20rem] h-fit items-stretch pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                    <div className="flex flex-wrap flex-col items-center flex-1 px-4 py-1 text-center mx-auto">
                        <h2 className="text-2xl font-bold tracking-normal text-gray-800">
                            Subject
                        </h2>
                        <p>{item?.subject}</p>
                    </div>
                    <hr className="border-gray-300" />
                    <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                        Email: {item?.email}
                    </p>
                </div>
            </div>
        </Link>
    ))

    return <Card />
};
