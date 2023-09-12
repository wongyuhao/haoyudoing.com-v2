import Head from 'next/head'
import Profile from "../components/home/Profile";
import Description from "../components/home/Description";
import Experience from "../components/home/Experience";
import Code from '../components/home/Code';
import Keyboards from "../components/home/Keyboards";
import Project from "../components/interfaces/Project";
import {request, gql} from 'graphql-request';
import Footer from '../components/layout/Footer';


type HomeProps = {
    projectData: Project[]
}

export default function Home(props: HomeProps) {
  return (
    <div className={''}>
      <Head>
        <title>Yu Hao Wong</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className={'w-full max-w-screen-xl mx-auto'}>
         <div className={'grid grid-cols-12 grid-flow-row gap-3 px-3 lg:px-5 mx-auto'}>
             <Profile/>
             <Description/>
             <div className={'col-span-12 lg:col-span-4 grid grid-cols-4 grid-flow-row-dense gap-3 '}>
                 <Experience/>
                 <Keyboards/>
             </div>

             <div className={'col-span-12 lg:col-span-8 '}>
                 <Code codeItems={props.projectData}/>
             </div>
         </div>
     </div>
    </div>
  )
}

export async function getStaticProps() {
    const query = gql`
    {
        projects(orderBy: priority_DESC) {
            id
            name
            thumbnail {
                url
            }
            url
            description
        }
    }
    `

    const projectData = await request(process.env.GRAPH_ENDPOINT || "https://ap-northeast-1.cdn.hygraph.com/content/cke73dv0pgsmj01xid076hy4t/master", query)
        .then((data) => data.projects as Project[])

    return {
        props: {
            projectData: projectData
        }
    }
}
