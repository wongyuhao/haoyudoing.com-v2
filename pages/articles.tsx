import React from 'react'
import Image from 'next/image'
import { gql, request } from 'graphql-request'
import Link from "next/link";
import {Article} from "../components/interfaces/articleInterfaces";

interface ArticleProps {
    data: Article[]
}

const Articles = (props: ArticleProps) => {
    return (
        <div className='container'>
            <p className='text-4xl py-4'>Articles</p>
            <div className='grid grid-cols-2 gap-3  '>
            {props.data.map((article, i) => <ArticleLineItem key={i} {...article}/>)}
            </div>
        </div>
    )
}

const ArticleLineItem = (props: Article) => {
    return (
        <Link href={`/articles/${props.id}`}>
            <div className={'flex flex-col'}>
                <Image
                    src={props.displayImage.url}
                    alt={props.boardName}
                    width={500}
                    height={500}
                    quality={100}
                    className={'rounded w-full h-52 object-cover'}
                />
                <div className={'my-3'}>
                    <p className='text-xl font-bold'>{props.boardName}</p>
                    <p >{props.description}</p>
                </div>

            </div>
        </Link>
    )
}


export async function getStaticProps() {
    const query = gql`
    {
        mkbuildlogs(orderBy: publishedAt_DESC) {
            id
            boardName
            description
            displayImage {
                url(transformation: {image: {resize: {height: 500, width: 500}}})
            }
        }
    }
    `

    const articles = await request(process.env.GRAPH_ENDPOINT || "https://ap-northeast-1.cdn.hygraph.com/content/cke73dv0pgsmj01xid076hy4t/master", query)
        .then(data => data.mkbuildlogs as Article[])

    return {
        props: {
            data: articles
        }
    }
}

export default Articles