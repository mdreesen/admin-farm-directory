"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from '@/app/styles/Form.module.css';
import ToastApproved from "@/app/ui/toast/ToastApproved";

// Importing Categories
import { Categories } from '@/app/ui/productCategories/Categories';
import { CategoryFeedType } from '@/app/ui/productCategories/CategoryFeedType';
import { CategoryShow } from '@/app/ui/productCategories/CategoryShow';
import { CategoryAvailable } from '@/app/ui/productCategories/CategoryAvailable';
import { StatePicker } from "@/app/ui/statePicker";
import { FormValidation } from "@/app/ui/forms/FormValidation";


export const UpdateFarmerForm = (data: any) => {
    const farmerData = data?.data;

    const startData = {
        first_name: farmerData?.first_name,
        last_name: farmerData?.last_name,
        farm_name: farmerData?.farm_name,
        address_road: farmerData?.address_road,
        address_city: farmerData?.address_city,
        address_state: farmerData?.address_state,
        address_zip: farmerData?.address_zip,
        phone: farmerData?.phone,
        email: farmerData?.email,
        website: farmerData?.website,
        facebook: farmerData?.facebook,
        instagram: farmerData?.instagram,
        product_one_title: farmerData?.product_one_title,
        product_one_description: farmerData?.product_one_description,
        product_one_feed: farmerData?.product_one_feed,
        product_one_available: farmerData?.product_one_available,
        product_one_show: farmerData?.product_one_show,
        product_two_title: farmerData?.product_two_title,
        product_two_description: farmerData?.product_two_description,
        product_two_feed: farmerData?.product_two_feed,
        product_two_available: farmerData?.product_two_available,
        product_two_show: farmerData?.product_two_show,
        product_three_title: farmerData?.product_three_title,
        product_three_description: farmerData?.product_three_description,
        product_three_feed: farmerData?.product_three_feed,
        product_three_available: farmerData?.product_three_available,
        product_three_show: farmerData?.product_three_show
    };

    const [formData, setFormData] = useState(startData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [enableToast, setEnableToast] = useState<boolean>(false);

    const router = useRouter();

    const handleChange = (e: any) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true)

        const res = await fetch(`/api/Farmers/${farmerData?._id}`, {
            method: "PUT",
            cache: 'no-store',
            body: JSON.stringify({ formData }),
        });

        if (!res.ok) throw new Error("Failed to update Farmer");

        setEnableToast(true);
        setIsLoading(false);

        setTimeout(() => {
            setEnableToast(false);
        }, 6000);

        router.refresh();
    };

    const basicInfo = (
        <div className={styles['basicInfo']}>
            <h2>Basic Information</h2>
            <label>First Name</label>
            <input
                id="first_name"
                name="first_name"
                type="text"
                onChange={handleChange}
                value={formData?.first_name}
            />
            <FormValidation data={formData?.first_name} />

            <label>Last Name</label>
            <input
                id="last_name"
                name="last_name"
                type="text"
                onChange={handleChange}
                value={formData?.last_name}
                required
            />
            <FormValidation data={formData?.last_name} />


            <label>Farm Name</label>
            <input
                id="farm_name"
                name="farm_name"
                type="text"
                onChange={handleChange}
                value={formData?.farm_name}
            />

            <label>Road</label>
            <input
                id="address_road"
                name="address_road"
                type="text"
                onChange={handleChange}
                value={formData?.address_road}
                required
            />
            <FormValidation data={formData?.address_road} />


            <label>City</label>
            <input
                id="address_city"
                name="address_city"
                type="text"
                onChange={handleChange}
                value={formData?.address_city}
                required
            />
            <FormValidation data={formData?.address_city} />

            <label>State</label>
            <select
                name="address_state"
                value={formData?.address_state?.trim()}
                onChange={handleChange}
                required
            >
                <StatePicker />
            </select>
            <FormValidation data={formData?.address_state} />

            <label>Zip</label>
            <input
                id="address_zip"
                name="address_zip"
                type="text"
                onChange={handleChange}
                value={formData?.address_zip}
                required
            />
            <FormValidation data={formData?.address_zip} />


            <label>Phone</label>
            <input
                id="phone"
                name="phone"
                type="text"
                onChange={handleChange}
                value={formData?.phone?.trim()}
                required
            />
            <FormValidation data={formData?.phone} />


            <label>Email</label>
            <input
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                value={formData?.email?.trim()}
                required
            />
            <FormValidation data={formData?.email} />

        </div>
    );

    const socialInfo = (
        <div className={styles['basicInfo']}>

            <h2>Social Information</h2>
            <label>Website Link</label>
            <input
                id="website"
                name="website"
                type="text"
                onChange={handleChange}
                value={formData?.website?.trim()}
            />

            <label>Facebook Link</label>
            <input
                id="facebook"
                name="facebook"
                type="text"
                onChange={handleChange}
                value={formData?.facebook?.trim()}
            />

            <label>Instagram Link</label>
            <input
                id="instagram"
                name="instagram"
                type="text"
                onChange={handleChange}
                value={formData?.instagram?.trim()}
            />
        </div>
    );

    const productOneFeed = formData?.product_one_title === 'Beef' && (
        <>
            <label>Product 1 Feed Type</label>
            <select
                name="product_one_feed"
                value={formData?.product_one_feed?.trim()}
                onChange={handleChange}
            >
                <CategoryFeedType />
            </select>
        </>
    );

    const productTwoFeed = formData?.product_two_title === 'Beef' && (
        <>
            <label>Product 2 Feed Type</label>
            <select
                name="product_two_feed"
                value={formData?.product_two_feed?.trim()}
                onChange={handleChange}
            >
                <CategoryFeedType />
            </select>
        </>
    );

    const productThreeFeed = formData?.product_three_title === 'Beef' && (
        <>
            <label>Product 3 Feed Type</label>
            <select
                name="product_three_feed"
                value={formData?.product_three_feed?.trim()}
                onChange={handleChange}
            >
                <CategoryFeedType />
            </select>
        </>
    );

    const productOneInfo = (
        <div className={styles['product']}>
            <h2>Product One Information</h2>
            <label>Product 1</label>
            <select
                name="product_one_title"
                value={formData?.product_one_title?.trim()}
                onChange={handleChange}
                required
            >
                <Categories />
            </select>
            <FormValidation data={formData?.product_one_title} />

            <label>Product 1 Description</label>
            <textarea
                id="product_one_description"
                name="product_one_description"
                rows={5}
                onChange={handleChange}
                value={formData?.product_one_description}
            />

            {productOneFeed}

            <label>Do you want your product to show?</label>
            <select
                name="product_one_show"
                value={formData?.product_one_show}
                onChange={handleChange}
            >
                <CategoryShow />
            </select>

            <label>Is your product available now?</label>
            <select
                name="product_one_available"
                value={formData?.product_one_available}
                onChange={handleChange}
            >
                <CategoryAvailable />
            </select>
        </div>
    );

    const productTwoInfo = (
        <div className={styles['product']}>
            <h2>Product Two Information</h2>
            <label>Product 2</label>
            <select
                name="product_two_title"
                value={formData?.product_two_title?.trim()}
                onChange={handleChange}
            >
                <Categories />
            </select>

            <label>Product 2 Description</label>
            <textarea
                id="product_two_description"
                name="product_two_description"
                rows={5}
                onChange={handleChange}
                value={formData?.product_two_description}
            />

            {productTwoFeed}

            <label>Do you want your product to show?</label>
            <select
                name="product_two_show"
                value={formData?.product_two_show}
                onChange={handleChange}
            >
                <CategoryShow />
            </select>

            <label>Is your product available now?</label>
            <select
                name="product_two_available"
                value={formData?.product_two_available}
                onChange={handleChange}
            >
                <CategoryAvailable />
            </select>
        </div>
    );

    const productThreeInfo = (
        <div className={styles['product']}>
            <h2>Product Three Information</h2>
            <label>Product 3</label>
            <select
                name="product_three_title"
                value={formData?.product_three_title?.trim()}
                onChange={handleChange}
            >
                <Categories />
            </select>

            <label>Product 3 Description</label>
            <textarea
                id="product_three_description"
                name="product_three_description"
                rows={5}
                onChange={handleChange}
                value={formData?.product_three_description}
            />

            {productThreeFeed}

            <label>Do you want your product to show?</label>
            <select
                name="product_three_show"
                value={formData?.product_three_show}
                onChange={handleChange}
            >
                <CategoryShow />
            </select>

            <label>Is your product available now?</label>
            <select
                name="product_three_available"
                value={formData?.product_three_available}
                onChange={handleChange}
            >
                <CategoryAvailable />
            </select>
        </div>
    );

    return (
        <>
            <form className={styles['container']} method="post" onSubmit={handleSubmit}>
                {basicInfo}
                {socialInfo}
                {productOneInfo}
                {productTwoInfo}
                {productThreeInfo}
                {isLoading ? <span className="text-yellow-500 flex justify-center">Submitted, Now Loading...</span> : (
                    <input
                        className={styles['submitBtn']}
                        type="submit"
                        value="Update"
                    />
                )}
            </form>
            {enableToast && <ToastApproved />}
        </>
    )
};