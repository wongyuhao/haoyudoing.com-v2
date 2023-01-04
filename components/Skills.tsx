import React from 'react'

export default function Skills() {
    const skills = ["Java" , "JavaScript" , "HTML" , "CSS" , "C" , "C++" , "Python" , "Dart" ,
                    "React" , "Node.js" , "DropWizard" , "Docker", "JUnit Testing" , "Flutter" , "GatsbyJS" , "NextJS" , "Bootstrap" ,
                    "Git" , ]

    const courses = [
        "Distributed Systems" , "AI" , "HCI", "Systems Programming" , "Algorithms", "Linear Algebra" ,  "Data Structures" ,  "Hardware & Software Interface" ,"Statistics",
    ]

    return (
        <div className={'card lg:col-span-4'}>
            <div>
                <p className={'font-extrabold text-lg mb-2'}>Skills</p>
                <div className={'flex flex-wrap gap-1'}>
                    {skills.map(
                        (skill, i)=>
                            <div key={i} className={'bg-gray-100 w-fit py-1 px-2 text-xs rounded-lg'}>
                                {skill}
                            </div>
                    )}
                </div>
            </div>
            <hr className={'my-3'}/>
            <div>
                <p className={'font-extrabold text-lg mb-2'}>Relevant Coursework</p>
                <div className={'flex flex-wrap gap-1'}>
                    {courses.map(
                        (course, i)=>
                            <div key={i} className={'bg-gray-100 w-fit py-1 px-2 text-xs rounded-lg'}>
                                {course}
                            </div>
                    )}
                </div>
            </div>

        </div>
    )
}