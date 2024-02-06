import welcome from './images/img_welcome.png'
import discord from './images/img_discord.png'
import intern from './images/img_internships.png'
import rcg from './images/img_rcg.png'
import cledge from './images/cledge2.png'
import unite from './images/unite.png'
import dh22 from './images/dh22.png'
import dh20 from './images/dh20.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {StaticImageData} from "next/image";
import hao from './images/hao.png'


interface HAProps {
    url: string,
    text: string
}
export const HA = ({url, text}: HAProps) => (
    <div>
        <FontAwesomeIcon icon={faUpRightFromSquare} size={"1x"} className={'mr-2'}/>
        <a href={url} className={'underline italic'} target={'_blank'}>{text}</a>
    </div>
)
export interface HuskyNode {
    id: string,
    date: string
    out_edges: string[],
    title: string
    content: JSX.Element | string
    images: StaticImageData[]
}
const PastContent  = () => (<div>
    <p>
        Starting college during the pandemic, travelling 8000 miles from home,
        and living alone for the first time were all daunting, isolating experiences,
        but my very first interactions at UW gave me the affirmation that community would be the cornerstone of my college life.
    </p>
    <br/>
    <p>
        Connecting with other international huskies through <i>Regional Connection Groups (RCG)</i>,
        I had a strong start with resources and mentors that set the tone for my time at UW.
        It gave me the confidence to seek out my own path and community.
    </p>
</div>)

const CircleContent = () => (<div className={'flex flex-col gap-4'}>
    <p>
        I came back to RCG the next year as a Peer Leader, using my personal experiences to bridge gaps and uncertainty for many international students in my shoes.
    </p>
    <p>I led orientation sessions and bonding events, and shaped the program curriculum to empower students in communication, personal finance and career planning
        - areas that I felt personally were daunting to navigate as a freshman in a foreign country.
    </p>
    <b>I believed that more students would thrive given the right resources and support.</b>
    <p>Today, RCG has grown into vibrant community providing for over <b>90%</b> of each year's inbound international students, and becoming their network into college life and beyond.
    I've had the opportunity to continue my involvement by interviewing future Peer Leaders, and sharing my engineering learnings from in- and outside- the classroom at Career Speaker Panels</p>
    <div className={'flex flex-col'}>
        <HA url={"https://canvas.uw.edu/courses/1436572"} text={"Canvas: RCG 2023"}/>
        <HA url={"https://fyp.washington.edu/connect-through-academics/shared-content-programs/international-students-regional-connection-groups-rcg/"} text={"First Year Programs: Regional Connection Groups"}/>
    </div>

</div>)

const UniteContent = () => (<div className={'flex flex-col gap-3'}>
    <p> Sure I came all the way to Seattle for a degree, but I would truly regret if I didn't also learn about the melting pot of cultures at UW.
        Through Unite, I met close friends from all corners of the world, to right-at-home in Seattle, sharing stories, cultural experiences and priceless memories.
        I rejoined as a facilitator immediately after to grow this truly special experience for others.
    </p>
    <b> It was a challenging time to reconnect people post-pandemic </b>
    <p>
        With a passionate team we managed to come out ahead. Some of my personal favorite events include cultural collaborations with campus clubs like FASA, CSA and ThaiSA,
        and organizing our annual beach-picnic sendoff for graduates. (with some teary goodbyes!)
    </p>
    <p>Unite UW now hosts almost 300 students every quarter, and I make sure to recommend it every chance I get!</p>
    <HA url={"https://unite.uw.edu"} text={"Unite UW"}/>
</div>)

const AllenContent = () => (<div className={'flex flex-col gap-4'}>
    <p>My takeaways from these programs shaped my in-classroom experiences at the Allen School.
        I was passionate about technology-for-social-good, and I wanted a to meet more of my peers.
        Missing said space during the pandemic, I helped start a Discord community to connect the incoming class.
    </p>
    <p>
        We grew over time to over 700 members today - a vibrant, inclusive space for goings-ons, fun meetups and helpful conversations.
        This community has directly shaped my personal and career trajectory -
        I met some of my closest friends, and even found my first internship opportunities through chatting there!
    </p>
    <HA url={"https://discord.gg/DyeJUVkckF"} text={"Discord: Come join us in UW CSE "}/>
</div>)

const TechContent = () => (<div className={'flex flex-col gap-4'}>
    <p>My experiences thus far had left a lasting impression - the world was a better place when people had a strong community behind them.
        I wanted to grow my Computer Science knowledge, while connecting it to build these strong, inclusive spaces for all. </p>
    <b>At DubHacks, I focused on building people-centered solutions.</b>
    <p>In 2020, I built FlippedTravel to explore neighbourhoods from a local's on-the-ground perspective, breaking down the isolation of a world in quarantine.</p>
    <p>In 2022, I created MOMO to remove the awkwardness of money conversations, allowing us to focus on the connections and fun of going out.
        Pitching this idea was nerve-wracking but rewarding - <i>we took home 2nd place in the Community Track that year!</i></p>
    <div>
        <HA url={"https://devpost.com/software/flipped-travel"} text={"FlippedTravel"}/>
        <HA url={"https://devpost.com/software/momo-sjxg21"} text={"MOMO"}/>
    </div>
    <hr/>

    <b>Tackling 'The College Problem'</b>
    <p>I helped build Cledge.org to achieve one goal - to break down the opaque, lonely and overwhelming college application process.
    We wanted to provide accessible college counseling alternatives to empower under-served communities.</p>
    <p>I joined as the lead developer to help break down high-barriers of entry to getting admissions help.
        This experience pushed my engineering knowledge,
        while connecting me with countless motivated, entrepreneurial students, mentors and industry connections.</p>
    <p>We grew a user-community of 100 people into a first-place win at the Dempsey Startup Competition
        - an affirmation to me that empowering communities with my skills was a path I could keep exploring!</p>
    <div>
        <HA url={"https://blog.foster.uw.edu/ai-wins-big-at-2023-dempsey-startup-competition/"} text={"AI Wins Big at 2023 Dempsey Startup Competition"}/>
    </div>
</div>)

const InternshipContent = () => (<div className={'flex flex-col gap-3'}>
    With our unique position in the research and engineering industry, I was always seeking real-world opportunities to tie-in my love for community-building with my skills in software-building.
    <p>I definitely couldn’t acheive my goals alone - I leaned on my support systems, navigated the ins-and-outs of a new industry, learned what a “LeetCode” was, how to not be absolutely terrified of interviewers.
    </p>
    <p>
        My internships led me to work super cool things like the servers powering Uber and TikTok, services that move Amazon packages around the globe, and apps that helped sustainably grow small-businesses.
        I attended the <b>Tapia Diversity in Computing Conference</b>, where I participated in insightful workshops and talks on building more sustainable, inclusive computing community.</p>
</div>)

const TodayContent = () => (<div className={'flex flex-col gap-3'}>
    <p>
        This year, I jumped on the opportunity to intern at Notion in San Francisco. I've been grateful for the chance to work on a product that aligns with my values and where I want to take my career.
    </p>
    <b> We make accessible tools that empower everyday people</b> From organizing events, creating websites for small business, and even growing personal passion-projects.
    <p>My favorite part of the job is talking to our amazingly passionate user-base online and at in-person events, hearing their stories and how I can do my part and help them grow their own communities.
        My paths here at UW have culminated into an amazing opportunity where I can do my best work and see the impact on people's lives.
    </p>
</div>)

export const nodes: Record<string, HuskyNode> = {
    past: {
        id: "past",
        date: '2001',
        out_edges: ['circle'],
        title: "A warm welcome",
        content: <PastContent/>,
        images: [welcome],
    },
    circle: {
        id: "circle",
        date: '2020-09-1',
        out_edges: ['unite', "cse"],
        title: "Leading Regional Connection Groups",
        content: <CircleContent/>,
        images: [rcg]
    },
    unite: {
        id: 'unite',
        date: '2020-09-2',
        out_edges: ['circle'],
        title: "Growing Unite UW",
        content: <UniteContent/>,
        images: [unite]
    },
    cse: {
        id: 'cse',
        date: '2020-09-3',
        out_edges: ['internships', 'dubhacks'],
        title: "Connecting the Allen School",
        content: <AllenContent/>,
        images: [discord]
    },
    dubhacks: {
        id: 'dubhacks',
        date: '2020-10',
        out_edges: ['today'],
        title: "Building for Communities",
        content: <TechContent/>,
        images: [cledge, dh22, dh20]
    },
    internships: {
        id: 'internships',
        date: '2021-01',
        out_edges: ['today', "circle"],
        title: "Outside the Classroom",
        content: <InternshipContent/>,
        images: [intern]
    },
    today: {
        id: 'today',
        date: '2024',
        out_edges: [],
        title: "One last adventure",
        content: <TodayContent/>,
        images: [hao]
    },

}

export type HuskyNodeKey = keyof typeof nodes;