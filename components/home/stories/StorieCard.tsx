import Image from 'next/image'
import React from 'react'

const StorieCard = () => {
    return (
        <div>
            <div className="bg-white shadow-lg mb-[4rem] mx-4">
                <div className="">
                    <Image src={"/data/image/mountain.jpg"} height={200} width={1000} alt='mountain' />
                </div>
                <div className="px-5 py-2 ">
                    <div className="text-lg font-bold">The Coldest Sunset</div>
                    <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non illo cumque magni autem itaque atque eius nulla, sed ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptate.</div>
                </div>
            </div>
        </div>
    )
}

export default StorieCard