"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { UpdateFarmerProducts } from '@/actions/farmer';
import farmerProducts from '@/utils/products/farmerProducts.json';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const availableOptions = [
  {
    id: 1,
    name: 'In Stock',
  },
  {
    id: 2,
    name: 'Out of Stock',
  }
];

const showOptions = [
  {
    id: 1,
    name: 'Show To Public',
  },
  {
    id: 2,
    name: 'Do Not Show To Public',
  }
]


export default function FarmerProductForm(data: any) {
  const id = data.data._id;

  const [error, setError] = useState<string>();
  const [productSelected, setProductSelected] = useState(farmerProducts[0]);
  const [availableSelected, setAvailableSelected] = useState(availableOptions[0]);
  const [showSelected, setShowSelected] = useState(showOptions[0]);

  const router = useRouter();
  const ref = useRef(null);

  // Sorting all products, these products are objects
  const sortProducts = farmerProducts.sort((a, b) => a.product_title.localeCompare(b.product_title));

  const handleSubmit = async (formData: FormData) => {
    try {
      const r = await UpdateFarmerProducts({
        id: id,
        product_title: productSelected.product_title,
        product_image: productSelected.image,
        product_description: formData.get("product_description"),
        product_price: formData.get("product_price"),
        product_available: availableSelected.name,
        product_show: showSelected.name
      });
      router.refresh
      router.push(`/dashboard/farmers/${id}/products`);
    } catch (error) {
      setError(error as string)
      console.log(error);
    }
  };

  const ProductDropdown = () => (
    <Listbox value={productSelected} onChange={setProductSelected}>
      <Label className="block text-sm font-medium leading-6 text-gray-900">Product Name</Label>
      <div className="relative">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <img alt="" src={`/images/products/${productSelected.image}`} className="h-5 w-5 flex-shrink-0 rounded-full" />
            <span className="ml-3 block truncate">{productSelected.product_title}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {sortProducts.map((person, index) => (
            <ListboxOption
              key={index}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {person.product_title}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          )
          )}
        </ListboxOptions>
      </div>
    </Listbox>
  );

  const AvailableDropdown = () => (
    <Listbox value={availableSelected} onChange={setAvailableSelected}>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <span className="ml-3 block truncate">{availableSelected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {availableOptions.map((item) => (
            <ListboxOption
              key={`item-${item.id}`}
              value={item}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {item.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );

  const ShowDropdown = () => (
    <Listbox value={showSelected} onChange={setShowSelected}>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <span className="ml-3 block truncate">{showSelected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {showOptions.map((item) => (
            <ListboxOption
              key={`item-${item.id}`}
              value={item}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {item.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );

  return (
    <div className="bg-white p-4">
      <form ref={ref} action={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Make your products</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="product" className="block text-sm font-medium leading-6 text-gray-900">

                </label>
                <div className="mt-2">
                  <ProductDropdown />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="product_description" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="product_description"
                    name="product_description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    placeholder="Grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs)."
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Price
                </label>
                <div className="mt-2 flex">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="product_price"
                      name="product_price"
                      type="text"
                      placeholder="$1.00"
                      defaultValue={'$'}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="show" className="block text-sm font-medium leading-6 text-gray-900">
                  Is this product in stock or available?
                </label>
                <div className="mt-2">
                  <AvailableDropdown />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="show" className="block text-sm font-medium leading-6 text-gray-900">
                  Do you want to show this product to the public?
                </label>
                <div className="mt-2">
                  <ShowDropdown />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="submit" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>
        </div>
        {error && <div className="">{error}</div>}
      </form>

    </div>
  )
}
