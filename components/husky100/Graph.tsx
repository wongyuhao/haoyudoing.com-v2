import React, {useEffect, useRef} from "react";
import ForceGraph2D, {ForceGraphMethods} from 'react-force-graph-2d';
import {HuskyNode, HuskyNodeKey, nodes} from "./nodes";
import _ from "lodash";

const Graph = () => {
    const graphRef = useRef<ForceGraphMethods | undefined>(undefined)
    useEffect(()=> {
        graphRef?.current?.d3Force('charge')?.strength(-50).distanceMax(500)
    },[])


    return (
        <div className={'max-w-4xl border-2 border-solid border-red-200'}>
            <ForceGraph2D
                ref={graphRef}
                graphData={buildGraph(Object.values(nodes))}
                linkHoverPrecision={0.5}
                nodeAutoColorBy="group"
                nodeLabel="id"
                linkWidth={4}
                width={400}
                height={400}
                onNodeClick={(node)=>{
                    alert(node.id)
                }}

            />
        </div>
    );
};

const buildGraph = (nodes: HuskyNode[]) => {
    const graphNodes = nodes.map(
        (n, i) => {
            let fx = undefined
            let fy = undefined
            if (i === 0) {
                fx = 0
                fy = -80
            };
            if (i === nodes.length -2 ) {
                fx = 0
                fy = 50
            }
            if (i === nodes.length -1 ) {
                fx = 0
                fy = 80
            }
            return {
                id: n.id,
                group: i,
                fx,
                fy,
            }
        }
    )
    const links: {source: HuskyNodeKey, target: HuskyNodeKey}[] = [];
    nodes.forEach(node => {
        node.out_edges.forEach(target => {
            links.push({source: node.id, target})
        })
    })

    return {
        nodes: graphNodes,
        links: links
    };
}

export default Graph