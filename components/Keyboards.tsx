import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faNewspaper, faKeyboard} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const articleURL = 'https://media.graphassets.com/jCGbapecRKGI6S9zwdF8'

export default function Keyboards() {

    return (
        <div className={'card w-full col-span-4 row-span-6'}>
            <p className={'text-xl p-1'}>Keyboards</p>

            <div className={'bg-gray-50 font-mono text-sm rounded-lg p-3'}>
                {'Look mom I\'m in the news! '}
                {'Read about my work on making open-source mechanical keyboard projects more accessible and better documented.'}
                <div className={'p-3 w-fit'}>
                    <a
                        className={'flex flex-row flex-nowrap items-center'}
                        href={articleURL}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <div className={'flex justify-center w-4'}>
                            <FontAwesomeIcon icon={faNewspaper} size={'xl'}/>
                        </div>
                        <div className={'mr-3'}/>
                        <p className={'font-mono'}>Article 	→</p>
                    </a>
                </div>
                <div className={'p-3 w-fit'}>
                    <Link
                        className={'flex flex-row flex-nowrap items-center'}
                        href={'/keyboards'}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <div className={'flex justify-center w-4'}>
                            <FontAwesomeIcon icon={faKeyboard} size={'xl'}/>
                        </div>
                        <div className={'mr-3'}/>
                        <p className={'font-mono'}>Build Logs 	→</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}