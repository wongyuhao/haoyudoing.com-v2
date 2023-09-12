import React from 'react'
import Oracle from '/public/static/oracle.jpg'
import Cledge from '/public/static/cledge.jpg'
import Memo from '/public/static/memo.jpg'
import ExperienceLineItem, {ExperienceData} from "./ExperienceLineItem";
import Allen from "/public/static/allen.jpg";
import Seal from "/public/static/seal.jpg";
import Amazon from '/public/static/amazon.jpg'
import HubSpot from '/public/static/hubspot.jpg'


const experience:ExperienceData[] = [
    {
        company: 'HubSpot',
        role: 'Software Engineer Co-op',
        description: 'Implemented and tested frontend UI functionality to enable intuitive in-app customer buying experiences ',
        dateStart: 'Sept. 2023',
        dateEnd: 'Dec. 2023',
        location: 'Seattle, Washington',
        image: HubSpot
    },
    {
        company: 'Amazon',
        role: 'Software Development Engineer Intern',
        description: 'Designed, deployed, and optimized large-scale document management microservice functionality supporting 10M+ TPM',
        dateStart: 'Jun. 2023',
        dateEnd: 'Sept. 2023',
        location: 'Seattle, Washington',
        image: Amazon
    },
    {
        company: 'Oracle Cloud Infrastructure',
        role: 'Software Engineer Intern',
        description: 'Implemented a new bare-metal provisioning workflow monitoring service across OCI\'s global cloud compute fleet in 40+ regions',
        dateStart: 'Jun. 2022',
        dateEnd: 'Sept. 2022',
        location: 'Seattle, Washington',
        image: Oracle
    },
    {
        company: 'Cledge.org',
        role: 'Software Engineer Lead',
        description: 'Led frontend development and project management on a Large-Language-Model powered college counseling platform',
        dateStart: 'Jul. 2021',
        dateEnd: 'Oct. 2021',
        location: 'Seattle, Washington',
        image: Cledge
    },
    {
        company: 'Memo Agility Consulting',
        role: 'Software Engineer Intern',
        description: 'Designed and executing quality end-to-end software solutions for third-party business clients',
        dateStart: 'Sept. 2020',
        dateEnd:'Mar. 2021',
        location: 'Kuala Lumpur, Malaysia',
        image: Memo
    },
]

const research:ExperienceData[] = [
    {
        company:'Paul G. Allen School Of Computer Science',
        role:'Undergraduate Research Assistant',
        description: 'Researched applications of interactive and composable developer tools in embedded runtimes',
        location:'Seattle, Washington',
        dateStart:'Nov. 2022',
        dateEnd:'Present',
        image: Allen
    },
    {
        company: 'Sensors, Energy and Automation Laboratory',
        role: 'Undergraduate Research Assistant',
        description: 'Developed internal technical documentation software suite for faculty and researchers.',
        location: 'Seattle, Washington',
        dateStart: 'Mar. 2021',
        dateEnd: 'Jun. 2021',
        image: Seal
    }
]




export default function Experience() {
    return (
        <div className={'card lg:col-span-4 h-min'}>
            <p className={'text-xl pt-4 pb-2'}>Experience</p>
            <div>
                {experience.map((item, i)=><ExperienceLineItem item={item} key={i}/>)}
            </div>
           <hr className={'my-2'}/>
            <p className={'text-xl pt-4 pb-2'}>Research</p>
            <div>
                {research.map((item, i)=><ExperienceLineItem item={item} key={i}/>)}
            </div>
        </div>
    )
}