import React from 'react'
import { gql, request } from 'graphql-request'

interface ArticleProps {
    data: Article[]
}

export default (props: ArticleProps) => {
    return (
        <div className='container mx-auto max-w-xl'>
            <p className='text-xl'>Articles</p>
            <div className='flex flex-col gap-3'>
            {
                props.data.map((article) => <ArticleLineItem {...article}/>)
            }
            </div>
        </div>
    )
}

const ArticleLineItem = (props: Article) => {
    return (
        <div>
            <p className='font-bold'>{props.boardName}</p>
            <p>{props.description}</p>
        </div>
    )
}

interface Article {
    id: string,
    boardName: string,
    description: string
}

export async function getStaticProps() {
    const query = gql`
    {
        mkbuildlogs(orderBy: publishedAt_DESC) {
            id
            boardName
            description
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