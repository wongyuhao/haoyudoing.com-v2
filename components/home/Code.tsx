import React, {ReactElement} from 'react'
import Image from "next/image";
import ProfileLineItem from "./ProfileLineItem";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Project from "../interfaces/Project";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare, faAward, faRocket} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type CodeProps = {
    codeItems : Project[]
}



export default function Code(props: CodeProps ) {

    return (
        <div className={'card'}>
           <div className={'flex flex-row justify-between items-center mt-3 mb-4'}>
               <div className={'text-xl'}>Projects</div>
               <Link href={'https://github.com/wongyuhao'}><FontAwesomeIcon icon={faGithub} size={'xl'}/></Link>
           </div>

            <div className={'grid lg:grid-cols-2 gap-2'}>
                {props.codeItems.map(
                        (item, i)=>
                            <div key={i} className={'col-span-1 rounded-lg ease-out duration-200 hover:scale-[1.01] '}>
                                <div className={'w-full h-48 relative z-0'}>
                                    <div className={'top-0 absolute z-20 bg-opacity-70 bg-black w-full h-full rounded-lg flex flex-col justify-between'}>
                                        <div className={'p-5 text-white drop-shadow-lg'}>
                                            <p className={'font-medium text-2xl pb-1'}>{item.name}</p>
                                            <p className={'text-sm'}>{item.description}</p>
                                        </div>

                                        <div className={'p-5 text-white drop-shadow flex flex-row-reverse justify-between'}>
                                            {
                                                item.url ?
                                                    <a href={item.url.toString()} className={'opacity-70'}>
                                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={'lg'}/>
                                                    </a>
                                                    :
                                                    <></>
                                            }
                                            {
                                                badge(item.name)
                                            }
                                        </div>
                                    </div>
                                    <Image
                                        className={'rounded-lg'}
                                        src={item.thumbnail?.url.toString()}
                                        alt={''}
                                        fill
                                        style={{
                                            objectFit:'cover'
                                        }}
                                    />
                                </div>
                            </div>
                    )}
            </div>
        </div>
    );
}


const badge = (name: string) : ReactElement => {
   if (name.toLowerCase().includes('momo')) {
       return (
           <div>
               <FontAwesomeIcon icon={faAward} size={'xl'} className={'mr-2'}/>
              <i>DubHacks '22 Runner-Up</i>
           </div>
       )
   }

   if (name.toLowerCase().includes('cledge')) {
       return (
           <div>
               <FontAwesomeIcon icon={faRocket} size={'xl'} className={'mr-2'}/>
               <i>{'Microsoft For Startups \'21'}</i>
           </div>
       )
   }

   return <></>
}