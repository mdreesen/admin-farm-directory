'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter, usePathname } from 'next/navigation';
import LocationMessage from '@/app/ui/messages/LocationMessage';
import EnableLocationService from '@/app/ui/buttons/enableLocationService';
import Search from './Search';

export default function SearchFilter() {

    const startData = {
        state: '',
        zip_code: '',
    };

    const [openDropdown, setOpenDropdown] = useState(false);
    const [formData, setFormData] = useState(startData);
    const [isStateStorageItem, setIsStateStorageItem] = useState('');
    const [isZipStorageItem, setIsZipStorageItem] = useState('');
    const [isCityStorageItem, setIsCityStorageItem] = useState('');
    const [isFilterUsed, setIsFilterUsed] = useState();
    const [isChecked, setChecked] = useState(Boolean);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace, refresh } = useRouter();


    const handleChange = (e: any) => {
        const { value, checked, name } = e.target;
        const queryValue = checked ? value : 'all';
        setIsFilterUsed(checked)


        const checkingBoxes = !value ? false : true
        setChecked(checkingBoxes);

        // Setting Params for searching
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        params.set('query', queryValue);
        replace(`${pathname}?${params.toString()}`);

        // Check Checkbox Data
        if (checked) {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value === ''
            }))
        }
    };

    // Handling the search filter box
    const handleDropdown = () => {
        setOpenDropdown(true);
    }
    const handleClose = () => {
        setOpenDropdown(false);
    }

    // Using useEffect here for localStorage items
    useEffect(() => {
        // Get the value from local storage if it exists
        const stateStorageItem = localStorage.getItem("state") ?? "";
        const zipStorageItem = localStorage.getItem("postalCode") ?? "";
        const cityStorageItem = localStorage.getItem("city") ?? "";

        setIsStateStorageItem(stateStorageItem);
        setIsZipStorageItem(zipStorageItem);
        setIsCityStorageItem(cityStorageItem);

    }, []);

    const searchFilterData = [
        { 'title': 'State', 'name': 'option', 'id': 'state', 'type': 'checkbox', 'onChange': handleChange, 'value': isStateStorageItem },
        { 'title': 'Zip Code', 'name': 'option', 'id': 'zip_code', 'type': 'checkbox', 'onChange': handleChange, 'value': isZipStorageItem },
        { 'title': 'City', 'name': 'option', 'id': 'city', 'type': 'checkbox', 'onChange': handleChange, 'value': isCityStorageItem },
    ]

    const searchFilterElement = searchFilterData.map((item, index) => (
        <li className="flex items-center" key={`${item?.title}-${index}`}>
            <input id={item?.id} type={item?.type} name={item?.name} onChange={item?.onChange} value={item?.value} className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2" />
 
            <span className="ml-2 text-sm font-medium text-gray-900">
                {item?.title}
            </span>
        </li>
    ));

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className={`text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center`} type="button" onClick={handleDropdown}>
                {isFilterUsed ? <span className='absolute -ml-5 text-2xl text-red-500'>☑ </span> : ''} Filter category by
                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            { /* Dropdown menu */}
            <div id="dropdown" className={`z-10 ${!openDropdown && 'hidden'} w-56 p-3 bg-white rounded-lg shadow`}>
                <LocationMessage />
                <EnableLocationService />
                <h6 className="mb-3 text-sm font-medium text-gray-900">
                    Select below
                </h6>
                <ul className="space-y-2 py-2 text-sm" aria-labelledby="dropdownDefault">
                    {searchFilterElement}
                    <div className='text-gray-900'>
                        <Search placeholder={'Search for farmers...'} />
                    </div>
                </ul>

                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className={`text-red-500 bg-grey-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center`} type="button" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

