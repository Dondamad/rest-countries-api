import React from 'react'
import Image from 'next/image'

function CountryCard() {
    return (
        <div className='w-[264px] h-[336px] rounded-[5px] shadow bg-white dark:bg-gray-700'>
            <Image
                src="https://flagcdn.com/dz.svg"
                alt="close"
                width={0}
                height={0}
                className="object-cover w-full h-[160px] rounded-tl rounded-tr"
            />
            <div className='p-6 '>
                <h1 className='mb-4 text-lg font-extrabold leading-relaxed dark:text-white text-neutral-900'>Algeria</h1>
                <div className='flex flex-col'>
                    <p>
                        <span className="text-sm font-semibold leading-none dark:text-white text-neutral-900">Population: </span>
                        <span className="text-sm font-light leading-none dark:text-white text-neutral-900">206,135,893</span>
                    </p>
                    <p>
                        <span className="text-sm font-semibold leading-none dark:text-white text-neutral-900">Region: </span>
                        <span className="text-sm font-light leading-none dark:text-white text-neutral-900">Africa</span>
                    </p>
                    <p>
                        <span className="text-sm font-semibold leading-none dark:text-white text-neutral-900">Capital: </span>
                        <span className="text-sm font-light leading-none dark:text-white text-neutral-900">Algiers</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CountryCard