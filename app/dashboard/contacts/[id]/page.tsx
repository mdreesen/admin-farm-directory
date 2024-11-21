import { fetchSingleContact } from '@/actions/contact';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const contact = await fetchSingleContact(id);

  return (
    <main className="bg-white px-4 pb-24 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="max-w-xl">
          <h1 className="text-base font-medium text-indigo-600">Contact</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight">{contact.subject}</p>

          <dl className="mt-12 text-sm font-medium">
            <dt className="text-gray-900"><span>{contact.first_name}</span> <span>{contact.last_name}</span></dt>
            <dd className="mt-2 text-indigo-600">{contact.email}</dd>
            <dd className="mt-2 text-indigo-600">{contact.phone_number}</dd>
          </dl>
        </div>

        <section aria-labelledby="order-heading" className="mt-10 border-t border-gray-200">

          <div>

            <dl className="grid grid-cols-1 gap-x-6 py-10 text-sm">
              <div>
                <dt className="font-medium text-gray-900">Message</dt>
                <dd className="mt-2 text-gray-700">
                  <div className="not-italic">
                    <p className="block">{contact.message}</p>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </main>
  )
}
