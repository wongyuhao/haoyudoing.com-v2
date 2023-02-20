import React, { useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faNewspaper, faKeyboard} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const articleURL = 'https://media.graphassets.com/jCGbapecRKGI6S9zwdF8'

export default function Keyboards() {
    const [comingSoon, setComingSoon] = useState(false);
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
                <div className={'p-3 w-full relative'}>
                    <Link
                        className={'flex flex-row flex-nowrap items-center '}
                        href={''}
                        onMouseEnter={()=>setComingSoon(true)}
                        onMouseLeave={()=>setComingSoon(false)}
                    >
                        <div className={'flex justify-center w-4 z-10 opacity-50'}>
                            <FontAwesomeIcon icon={faKeyboard} size={'xl'}/>
                        </div>
                        <div className={'mr-3 z-10'}/>
                        <p className={'font-mono z-10 opacity-50'}>Build Logs 	→</p>
                        {comingSoon && <div className='right-0 mx-1 p-2 bg-slate-600 absolute text-white rounded-lg z-20'>Coming Soon!</div>}
                    </Link>
                </div>
               
            </div>
        </div>
    )
}