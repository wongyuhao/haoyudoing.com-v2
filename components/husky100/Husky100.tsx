import React from 'react'
import {HA, HuskyNode, nodes} from "./nodes";
import huskyStadium from './images/huskystadium_art.png'
import uwEntrance from './images/uwentrance_art.png'
import {sortBy} from 'lodash'
import dynamic from "next/dynamic";
import Image, {StaticImageData} from "next/image";
import hao from './images/hao.png'
import avatar from './images/old/avatar.png'


export default function Husky100() {
    return (<div className={'husky-body container'}>
        <div className={'flex flex-row justify-between'}>
            <div className={'flex flex-row '}>
                <div className={'flex-col justify-center pr-5'}>
                    <Image src={avatar} alt={"A drawn avatar of Hao"} className={'w-52'} />
                    <p className={'w-52 text-xs p-4 text-center'}>Avatar courtesy of the wonderful folks at Notion!</p>
                </div>
                <div className={'flex flex-col'}>
                    <p className={'text-4xl text-[#32006e] font-black'}>Hao's Husky Journey</p>
                    <div className={'m-0.5 max-w-xl py-5'}>
                        Come with me to recap an incredible 4 years of being a proud UW Husky! <br/>
                        Through my time seeking and building strong, inclusive communities here, UW has become my home away from home.
                        <br/>
                        <br/>Here's a look at the many wonderful experiences and interactions that have defined my husky experience!
                    </div>
                </div>
            </div>
            <div className={'w-72 text-center'}>
                <Image src={uwEntrance} alt={""} className={''}/>
                <a className={'text-xs '}>Credit: Gabriel Campanario / The Seattle Times </a>
            </div>

        </div>
        <div className={'h-12'}></div>
        <ListView/>
        <div className={'p-4'}>
            <p className={'text-4xl text-[#32006e] font-black'}>As my time at UW comes to a close,</p>
            <div className={'py-5 flex flex-row'}>
                <Image src={hao} alt={""} className={'w-72 rounded-xl'}/>
                <div className={'m-5 '}>
                    <p>I could not be more proud and grateful for each and every community, interaction and lesson that has shaped my journey.</p>
                    <p> My time as a Husky and helped tremendously to shape my future path. I want to shape my Software Engineering career and make my impact by breaking down barriers and make the world a closer place.</p>
                    <p> I'm excited to take my boundless experiences to the world, and to achieve what's most important to me - empowering everyone to find their place and community</p>
                </div>

            </div>
        </div>
        <hr className={'p-3'}/>
        <div className={'flex flex-row justify-between'}>
            <div className={'flex flex-col'}>
                <HA url={'haoyudoing.com'} text={"Explore the rest of this website: haoyudoing.com"}/>
                <HA url={'linkedin.com/in/haoyudoing'} text={"Find me on LinkedIn"}/>
            </div>
            <div className={'w-72 text-center'}>
                <Image src={huskyStadium} alt={""} className={''}/>
                <a className={'text-xs '}>Credit: Gabriel Campanario / The Seattle Times </a>
            </div>
        </div>
    </div>)
}



function ListView(){
    const listNodes = sortBy(nodes, (n)=> n.date)
    return <div className={'flex flex-col gap-6'}>{listNodes.map((n, i) => <HuskyNodeComponent node={n} color={'purple'} flip={(i%2===1)} />)} </div>
}
//
// function GraphView() {
//     return <ForceGraph2D graphData={}/>
// }

function HuskyNodeComponent({node, color  = "white", flip}: { node: HuskyNode, color: "purple" | "gold" | "white", flip?: boolean}) {
    const {title, content, images} = node;
    const colors = {
        purple: "#4b2e83",
        gold: "#e8e3d3",
        white: '#fff'
    }

    return (<div className={`flex`}>
        <div className={`bg-gray-100 rounded-lg p-3 w-3/5 border-[#32006e] border-l-8`}>
            <p className={'font-black text-3xl pb-2'}>{title}</p>
            {content}
        </div>
        <div className={'w-2/5 h-full mx-2'}>
            {node.images.map((img)=><Image src={img} alt={""} className={'w-[0.9] my-auto rounded-lg'}/>)}
        </div>
    </div>)
}

const mapImages = (images: StaticImageData[]) => {
    return images.map(img => {
        console.log(img)
        return ({
            src: img.src,
            width: img.width * 1.5,
            height: img.height * 1.5,
            isSelected: false,
            caption: "",
        })
    })
}