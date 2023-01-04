import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faSafari} from "@fortawesome/free-brands-svg-icons";
import ProfileLineItem from "./ProfileLineItem";
import {faEnvelope, faFileLines} from "@fortawesome/free-solid-svg-icons";

export default function Links() {


    return (
        <div className={'card flex flex-col lg:col-span-1 justify-around'}>
            <ProfileLineItem icon={faEnvelope} href={'mailto:wongyh@uw.edu'} text={'wongyh[at]uw.edu'}/>
            <ProfileLineItem icon={faLinkedin} href={'https://linkedin.com/in/haoyudoing'} text={'/in/haoyudoing'}/>
            <ProfileLineItem icon={faGithub} href={'https://github.com/wongyuhao'} text={'/wongyuhao'}/>
            <ProfileLineItem icon={faFileLines} href={'/public/static/headshot.jpg'} text={'my resume'}/>
        </div>
    )
}