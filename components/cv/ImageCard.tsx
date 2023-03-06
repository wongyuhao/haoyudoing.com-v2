import React from 'react'
import Image from "next/image";

export default function ImageCard({title,imageURL}:{title :string, imageURL:string}) {

    return (
        <div className={'bg-gray-500 rounded-lg w-fit h-fit rounded-lg'}>
            <p className={'p-3 font-medium text-white'}>{title}</p>
            <Image src={imageURL} width={300} height={200} alt={title} className={'rounded-b-lg'}/>
        </div>
    )
}