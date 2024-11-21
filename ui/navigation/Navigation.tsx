'use client';
import Image from "next/image";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import ButtonAuth from '@/ui/buttons/ButtonAuth';
import { useSession } from "next-auth/react";

export default function Navigation() {

    const { data, status } = useSession();
    const userData = data?.user;

    const useProfile = `/profile/${data?.user?.isFarmer ? 'farmer' : 'user'}/${data?.user?._id}`;

    // Desktop authenticated user
    const profileUserDesktop = status === 'authenticated' ? (
        <Menu as="div" className="relative ml-3">
            <div>
                <MenuButton className="relative flex rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    {userData?.image?.url ? <Image
                        alt=""
                        width={100}
                        height={100}
                        src={userData?.image?.url as string}
                        className="h-12 w-12 rounded-full object-cover scale-75"
                    /> : <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                    }
                </MenuButton>
            </div>
            <MenuItems
                //   transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <MenuItem>
                    <Link href={useProfile} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Your Profile
                    </Link>
                </MenuItem>
                <MenuItem>
                    <div>
                        <ButtonAuth />
                    </div>
                </MenuItem>
            </MenuItems>
        </Menu>
    ) : <ButtonAuth />;

    // Mobile authenticated user
    const profileUserMobile = status === 'authenticated' ? (
        <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
                <div className="ml-3">
                    {userData?.image?.url ? <Image
                        alt=""
                        width={100}
                        height={100}
                        src={userData?.image?.url as string}
                        className="h-12 w-12 rounded-full object-cover scale-75"
                    /> : <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                    }
                    <div className="text-sm font-medium text-gray-400">{data?.user.email}</div>
                </div>
            </div>
            <div className="mt-3 space-y-1 px-2">
                <a href={useProfile} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 text-gray-700">
                    Your Profile
                </a>
                <div>
                    <ButtonAuth />
                </div>
            </div>
        </div>
    ) : (
        <div className="px-2">
            <ButtonAuth />
        </div>
    );

    return (
        <Disclosure as="nav" className={'fixed w-full z-10 bg-white shadow-sm'}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image
                                    className="h-12 w-auto"
                                    src="/images/logos/logo.webp"
                                    alt="Company The Farm Directory Logo"
                                    width={360}
                                    height={74}
                                />
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700">
                                    Categories
                                </Link>
                                <a href="/map" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700">
                                    Map
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex items-center">

                            {/* Profile dropdown for desktop */}
                            {profileUserDesktop}
                        </div>
                    </div>
                    <div className="-mr-2 flex sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden py-6">
                <div className="flex flex-col space-y-1 px-2 pb-3 pt-4">
                    <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700">
                        Categories
                    </a>
                    <a href="/map" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700">
                        Map
                    </a>
                </div>
                {profileUserMobile}
            </DisclosurePanel>
        </Disclosure>
    )
}
