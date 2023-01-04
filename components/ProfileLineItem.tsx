import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

type ProfileLineItem_Props = {
    icon: IconDefinition,
    href: string,
    text: string,
    download?: string
}

export default function ProfileLineItem({icon, href, text, download}: ProfileLineItem_Props){
    return (
        <div className={'p-2 hover:bg-gray-100 rounded-lg hover:scale-[1.02]  ease-in-out duration-300'}>
            <a
                className={'flex flex-row flex-nowrap items-center'}
                href={href}
                target={'_blank'}
                rel="noreferrer"
                download={download}
            >
                <div className={'flex justify-center w-4'}>
                    <FontAwesomeIcon icon={icon} size={'xl'}/>
                </div>
                <div className={'mr-3'}/>
                <p className={'font-mono text-xs text-sm'}>{text}</p>
            </a>
        </div>
    )
}
