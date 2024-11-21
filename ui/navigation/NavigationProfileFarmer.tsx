'use client';
import { Disclosure } from '@headlessui/react';
import { useSession } from "next-auth/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
};

export default function NavigationProfile() {
  const { data, status } = useSession();

  const navigation = [
    { name: 'Info', href: `/info`, current: false },
    { name: 'Products', href: `/products`, current: false },
  ];

  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-evenly">

          {navigation.map((item) => status !== "loading" && (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current 
                  ? 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </Disclosure>
  )
}