import React, { useState } from 'react'
import {InfoPanel} from "../components/cv/InfoPanel";
import {CVAppPanel} from "../components/cv/CVAppPanel";
import cvAPIResponse from "../components/interfaces/cvAPI";



export default function CVPage() {
    const [data, setData] = useState<cvAPIResponse|undefined>(undefined)

    return (<div className='bg-gray-800 text-white min-w-full h-full'>
        <div className={'flex flex-row items-center justify-between px-5 bg-gray-900 fixed-top h-16'}>
            <p className={'font-black text-3xl'}> <a target={'_blank'} rel="noreferrer" href={ 'https://devpost.com/software/momo-sjxg21'} >MOMO</a> v2</p>
            <p className={'font-light opacity-70'}>CSE455 Winter 2023 · Yu Hao Wong · Harmony Shirk</p>
            <div className={'flex gap-3'}>
                <a href={'#cv-about'}>About </a>
                <a href={'#cv-video'}>Video</a>
                <a href={'#cv-pipeline'}>Pipeline</a>
                <a href={'#cv-discussion'}>Discussion</a>
            </div>
        </div>
        <div className={'h-16'}/>

        <div className='flex flex-row'>
            <CVAppPanel data={data} setData={setData}/>
            <InfoPanel data={data}/>
        </div>
    </div>)

}




  

