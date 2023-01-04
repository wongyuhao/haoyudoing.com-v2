import React from 'react'
import {faEnvelope, faFileLines, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ProfileLineItem from "./ProfileLineItem";


export default function Description(){


    return (
        <div className={'card lg:col-span-8 flex flex-col justify-evenly'}>
            <div className={'text-xl ml-2'}>
                About Me
            </div>


            <div className={'bg-gray-50 font-mono text-sm rounded-lg p-3 py-auto'}>
                <p>{"Hello! My name is Hao, and I\'m a junior at the Paul G. Allen School of Computer Science at the University of Washington."}</p>
                <br/>
                {`
                    I am passionate about developing software that has a positive impact on people\'s lives.
                    I have particular interests in cloud services, human-computer interaction and full-stack applications development.`}
                <br/>
                <br/>
                {`Outside of class, I enjoy travelling, cooking, and paddleboarding in one of Seattle\'s many lakes when the sun\'s out!`}
                <br/>
            </div>

            <hr className={'my-2'}/>

            <div className={'grid grid-cols-2 md:grid-cols-4  lg:p-3 lg:gap-5'}>
                <ProfileLineItem icon={faEnvelope} href={'mailto:wongyh@uw.edu'} text={'wongyh[at]uw.edu'}/>
                <ProfileLineItem icon={faLinkedin} href={'https://linkedin.com/in/haoyudoing'} text={'/in/haoyudoing'}/>
                <ProfileLineItem icon={faGithub} href={'https://github.com/wongyuhao'} text={'/wongyuhao'}/>
                <ProfileLineItem icon={faFileLines} href={'https://media.graphassets.com/CvtSPu49QiJhfg9D5kig'} text={'my resume'}/>
            </div>
        </div>
    )
}