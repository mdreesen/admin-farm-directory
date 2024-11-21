import { findContacts } from "@/actions/contact"
import Link from "next/link";

export default async function Page() {
  const contacts = await findContacts() as any;

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {contacts.map((item: any) => (
        <li key={item.email} className="flex justify-between gap-x-6 py-5">
          <Link href={`/dashboard/contacts/${item._id}`}>
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900"><span>{item.first_name}</span> <span>{item.last_name}</span></p>
              <p className="text-sm/6 font-semibold text-gray-900">{item.subject}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{item.email}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{item.phone_number}</p>

            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-900">{item.role}</p>
          </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
