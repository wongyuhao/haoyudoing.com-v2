import React, {useEffect} from 'react'
import {gql, request} from "graphql-request";
import Project from "../../components/interfaces/Project";
import {ArticleData} from "../../components/interfaces/articleInterfaces";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";

interface ArticleProps {
    data: ArticleData
}


const CustomMarkdown = (props: any) => (
    <ReactMarkdown
        className={'max-w-4xl'}
        components={{
            img: (img)=>
                (
                    <div className={'py-3'}>
                        <Image src={img.src || ""}
                               width={300}
                               height={300}
                               alt={img.title || ""}
                               title={img.title}
                               className={'rounded-2xl'}
                        />
                        <p className={'text-sm font-medium'}>{img.alt}</p>
                    </div>
                )
        }}>
        {props.children}
    </ReactMarkdown>
)

const Article = ({data}: ArticleProps) => {
    useEffect(()=> {

    }, [data])
    return data && (
        <main className={'flex flex-col gap-2'}>
            <h1 className={'text-4xl font-bold'}>{data.boardName}</h1>
            <h2>{data.description}</h2>
            <h3 className={'text-sm'}>Built {data.buildDate}</h3>
            {data.soundtestLink && <Link className={'text-sm underline'} href={data.soundtestLink} target={'_blank'}>Sound Test</Link>}
            <hr className={'my-3'}/>
            <CustomMarkdown>
                {data.content}
            </CustomMarkdown>
        </main>
    )
}

export default Article;


export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

const getAllPostIds = async () => {
    const query = gql`
    {
        mkbuildlogs(orderBy: publishedAt_DESC) {
            id
        }
    }`

    const buildLogIds = await request(process.env.GRAPH_ENDPOINT || "https://ap-northeast-1.cdn.hygraph.com/content/cke73dv0pgsmj01xid076hy4t/master", query)
        .then(data => data.mkbuildlogs)


    const paths = buildLogIds.map((item: { id: string }) => ({
        params: {
            id: item.id
        }
    }))

    return paths
}

export async function getStaticProps({params}:any) {
    const query = gql`
    {
        mkbuildlog(where: {id: "${params.id}"}) {
            id
            boardName
            description
            content
            case
            buildDate
            soundtestLink
        }
    }
    `
    const articleData = await request(process.env.GRAPH_ENDPOINT || "https://ap-northeast-1.cdn.hygraph.com/content/cke73dv0pgsmj01xid076hy4t/master", query)
        .then((data) => data.mkbuildlog as ArticleData)

    return {
        props: {
            data: articleData
        }
    }
}