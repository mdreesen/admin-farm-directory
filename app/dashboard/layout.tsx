import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import ButtonAuth from '@/ui/buttons/ButtonAuth';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Farmers', href: '/dashboard/farmers', current: false },
  { name: 'Contacts', href: '/dashboard/contacts', current: false },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Farm Directory - Admin",
  description: "Admoin site for Connecting farms to communities.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>


        <div className="min-h-full">
          <Disclosure as="nav" className="border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex justify-between w-full">
                  <div className="flex shrink-0 items-center">
                    <Link href="/dashboard">
                      <Image
                        className="h-12 w-auto"
                        src="/images/logos/logo.webp"
                        alt="Company The Farm Directory Logo"
                        width={360}
                        height={74}
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames('border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium')}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    <ButtonAuth />
                  </div>
                </div>

                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames('border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium')}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}

              </div>
              <div className="border-t border-gray-200 pb-3 pt-4">

                <div className="mt-3 space-y-1">
                  <ButtonAuth />
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>

          <div className="py-10">
            <header>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
              </div>
            </header>
            <main>
              <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
