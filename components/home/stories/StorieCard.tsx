import Image from 'next/image'
import React from 'react'

interface CommentCardProps {
    image: string;
    heading: string;
    paragraph: string;
  }

const StorieCard: React.FC<CommentCardProps> = ({ image, heading, paragraph }) => {
    return (
        <div>
            <div className="bg-white shadow-lg mb-[4rem] mx-4">
                <div className="">
                    <Image src={image} height={200} width={1000} alt='mountain' />
                </div>
                <div className="px-5 py-2 ">
                    <div className="text-lg font-bold">{heading}</div>
                    <div className="text-sm">{paragraph}</div>
                </div>
            </div>
        </div>
    )
}

export default StorieCard