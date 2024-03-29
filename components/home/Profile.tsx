import React from 'react'
import Image from "next/image";



import Headshot from '../../public/static/headshot.jpg'
export default function Profile() {
    return (
        <div className={'card lg:col-span-4 flex flex-row justify-between md:block'}>
                <Image
                    className={'rounded-full w-1/4 md:mx-auto md:w-60 lg:mb-2'}
                    src={Headshot}
                    alt={'Headshot of Yu Hao Wong'}
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />

                <div className={'p-1 my-auto'}>
                    <div className={'font-medium text-xl lg:text-2xl'}>Yu Hao Wong</div>
                    <div className={''}>
                        <div>University of Washington</div>
                        <div className={'text-sm'}>B.S. Computer Science 2024</div>
                    </div>
                </div>
        </div>
    );
}

