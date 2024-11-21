import Image from "next/image";
import Link from "next/link";

export default function CardNavigation(route: any) {

    return (
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-2 lg:grid-cols-4 xl:gap-x-8">
            {route.route.map((item: any) => item.icon ? (
                <li key={item.linkName} className="relative">
                    <Link href={item.directTo}>
                        <div className="flex flex-col justify-center items-center text-center group block w-[150px] overflow-hidden rounded-lg bg-transparent">
                            <Image
                                className="pointer-events-none group-hover:opacity-75 w-[100px]"
                                src={`/images/icons/navigation/${item.icon}`}
                                alt={item.linkName}
                                width={90}
                                height={18}
                            />
                            <span dangerouslySetInnerHTML={{ __html: item?.linkName }} />
                        </div>
                    </Link>
                </li>
            ) : (
                <li key={item.linkName} className="relative">
                <Link href={item.directTo}>
                    <div className="flex flex-col justify-center items-center text-center group block w-[150px] h-[150px] overflow-hidden rounded-lg bg-white">

                        <span dangerouslySetInnerHTML={{ __html: item?.linkName }} />
                    </div>
                </Link>
            </li>
            ))}
        </ul>
    )
}
