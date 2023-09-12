import React, {MouseEventHandler} from 'react'
import Link from "next/link";

const TapiaModal = ({closeModal}: {closeModal:  MouseEventHandler}) => {
    return (
        <div className={"fixed top-0 left-0 right-0 z-10 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-black bg-opacity-50"}>
            <div className="relative w-full max-w-xl max-h-full z-20 m-auto mt-10">
                <div className="relative bg-white rounded-lg p-4  flex flex-col">
                        <p className={'font-bold text-lg'}>Thanks for meeting with me at the CMD-IT/ACM Richard Tapia Conference! 👋</p>
                    <div className={'h-4'}/>
                    <p>It was a pleasure speaking with you, please don't hesitate to reach out to me at <Link className='underline' href={'mailto:wongyuhao.swe@gmail.com'}>✉️ wongyuhao.swe@gmail.com </Link> to chat more!</p>
                        <div className={'h-4'}/>
                    <p>I am currently seeking <b>New Graduate Software Engineer</b> roles starting June 2024.
                        On this site, you can find my {' '}
                        <Link className='underline' href={'/'}>💻 projects</Link> ,
                        <Link className='underline' href={'/'}>📄 resume</Link> ,
                        <Link className='underline' href={'/articles'}>🛠️ hardware blog</Link> , and more, so feel free to explore!
                    </p>
                        <div className={'h-4'}/>
                        <p>I look forward to hearing from you :)</p>
                        <div className={'w-full flex flex-row justify-end opacity-50 italic'}>- Hao</div>
                        <button className={'w-fit font-bold bg-blue-600 text-white rounded p-2 '} onClick={closeModal}>Okay!</button>
                </div>
            </div>

        </div>
    )
}

export default TapiaModal;