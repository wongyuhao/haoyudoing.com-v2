import Image, { StaticImageData } from "next/image";
import React from "react";

export type ExperienceData = {
    company: string,
    role: string
    description: string,
    dateStart: string,
    dateEnd: string,
    location: string,
    image: StaticImageData
}

type ELI_Props = {
    item: ExperienceData
}
export default function ExperienceLineItem({item}:ELI_Props) {
    return (
        <div  className={'p-3'}>
        <div className={'flex flex-row justify-between'}>
            <div className={''}>
                <p className={'font-medium'}>{item.company}</p>
                <p className={'font-light'}>{item.role}</p>

                <div className={'text-sm'}>
                    {item.description}
                </div>
            </div>
            <div>
                <Image
                    className={'rounded'}
                    src={item.image.src}
                    alt={item.company}
                    width={90}
                    height={90}
                    style={{
                        maxWidth: "50px",
                        height: "auto"
                    }} />
            </div>

        </div>
    </div>      
    );
}