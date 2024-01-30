import React from 'react'
import {HuskyNode, nodes} from "./nodes";
import ReactMarkdown from "react-markdown";
import {sortBy} from 'lodash'
import dynamic from "next/dynamic";
const GraphView = dynamic(() => import("./Graph"), {
    ssr: false,
});


export default function Husky100() {
    return (<div className={'m-5'}>
        <div className={'flex flex-row'}>
            <div className={'flex flex-col w-1/2'}>
                <p>My husky journey</p>
                Re-trace my path with me on an incredible 4 years as a husky!
                Along the way, I experience first-hand the importance of seeking and building strong communtities,
                and discvoer what it means to apply that in and outside the classroom
            </div>

            <GraphView/>
        </div>
        <ListView/>
    </div>)
}



function ListView(){
    const listNodes = sortBy(nodes, (n)=> n.date)
    return <div>{listNodes.map(n => <HuskyNodeComponent node={n}/>)} </div>
}
//
// function GraphView() {
//     return <ForceGraph2D graphData={}/>
// }

function HuskyNodeComponent({node}: { node: HuskyNode }) {
    const {title, content, images} = node;

    return (<div>
        <b>{title}</b>
        <ReactMarkdown
            className={'max-w-4xl'}>
            {content}
        </ReactMarkdown>
    </div>)
}