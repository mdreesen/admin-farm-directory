import Link from "next/link";

export default function Page() {

    return (
        <div className="h-[100vh]">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Resetting password
                    </h2>
                    <p className="mt-10 text-center leading-9 tracking-tight text-black">
                        Thank you for resetting your password.<br />
                        Go ahead and check your email for the link.<br/>
                        <Link href="/authentication/reset-password">If link was not sent, click here to try again.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};