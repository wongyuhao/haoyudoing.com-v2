import React, {useState} from 'react'
import {faEnvelope, faFileLines} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import ProfileLineItem from "./ProfileLineItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowPointer} from "@fortawesome/free-solid-svg-icons";
import TapiaModal from "../TapiaModal";


export default function Description({resumeUrl}:{resumeUrl: string}){
    const [showModal, setShowModal] = useState<boolean>(true);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div className={'card lg:col-span-8 flex flex-col justify-evenly'}>

            <div className={'flex flex-row gap-3 my-2'}>
                <div className={'text-2xl'}>
                    About Me
                </div>
                <button className={'bg-amber-300 font-bold rounded p-1 hover:bg-amber-400'} onClick={toggleModal}>
                    <FontAwesomeIcon icon={faArrowPointer} className={'mx-1.5'}/>
                    ACM Tapia 2023
                </button>
                {showModal && <TapiaModal closeModal={toggleModal}/>}
            </div>


            <div className={'bg-gray-50 text-sm rounded-lg p-3 py-auto'}>
                <p>{"Hello! My name is Hao, and I\'m a senior at the Paul G. Allen School of Computer Science at the University of Washington."}</p>
                <br/>
                {`
                    My passions include human-computer interaction, cloud services, and full-stack applications development
                    I have experience delivering impact in large-scale engineering teams, startups and research labs.`}
                <br/>
                <br/>
                {`In my downtime, I enjoy travelling, cooking, and paddleboarding in one of Seattle\'s many lakes when the sun\'s out!`}
                <br/>
            </div>

            <hr className={'my-2'}/>

            <div className={'grid grid-cols-2 md:grid-cols-4  lg:p-3 lg:gap-5'}>
                <ProfileLineItem icon={faFileLines} href={resumeUrl} text={'my resume'}/>
                <ProfileLineItem icon={faLinkedin} href={'https://linkedin.com/in/haoyudoing'} text={'/in/haoyudoing'}/>
                <ProfileLineItem icon={faEnvelope} href={'mailto:wongyuhao.swe@gmail.com'} text={'my email'}/>
                <ProfileLineItem icon={faGithub} href={'https://github.com/wongyuhao'} text={'/wongyuhao'}/>
            </div>


        </div>
    )
}