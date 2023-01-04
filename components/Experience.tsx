import React from 'react'
import Oracle from '/public/static/oracle.jpg'
import Cledge from '/public/static/cledge.jpg'
import Memo from '/public/static/memo.jpg'
import ExperienceLineItem, {ExperienceData} from "./ExperienceLineItem";
import Allen from "/public/static/allen.jpg";
import Seal from "/public/static/seal.jpg";



const experience:ExperienceData[] = [
    {
        company: 'Oracle Cloud Infrastructure',
        role: 'Software Engineer Intern',
        description: 'Improving monitoring API and services for OCI Compute',
        dateStart: 'Jun. 2022',
        dateEnd: 'Sept. 2022',
        location: 'Seattle, Washington',
        image: Oracle
    },
    {
        company: 'Cledge.org',
        role: 'Software Engineer Lead',
        description: 'Leading frontend development and API integration for the pre-seed MVP prototype',
        dateStart: 'Jul. 2021',
        dateEnd: 'Oct. 2021',
        location: 'Seattle, Washington',
        image: Cledge
    },
    {
        company: 'Memo Agility Consulting',
        role: 'Software Engineer Intern',
        description: 'Designing and executing end-to-end software solutions for business clients',
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
        description: 'Researching composable, interactive dev tools and their potential applications',
        location:'Seattle, Washington',
        dateStart:'Nov. 2022',
        dateEnd:'Present',
        image: Allen
    },
    {
        company: 'Sensors, Energy and Automation Laboratory',
        role: 'Undergraduate Research Assistant',
        description: 'Developing and unit testing in-house technical writing software for lab researchers.',
        location: 'Seattle, Washington',
        dateStart: 'Mar. 2021',
        dateEnd: 'Jun. 2021',
        image: Seal
    }
]




export default function Experience() {
    return (
        <div className={'card lg:col-span-4 h-min'}>
            <p className={'text-xl'}>Experience</p>
            <div>
                {experience.map((item, i)=><ExperienceLineItem item={item} key={i}/>)}
            </div>
           <hr className={'my-5'}/>
            <p className={'text-xl'}>Research</p>
            <div>
                {research.map((item, i)=><ExperienceLineItem item={item} key={i}/>)}
            </div>
        </div>
    )
}