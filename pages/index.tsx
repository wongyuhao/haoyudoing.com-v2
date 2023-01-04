import Head from 'next/head'
import Profile from "../components/Profile";
import Description from "../components/Description";
import Experience from "../components/Experience";
import Code from '../components/Code';
import Keyboards from "../components/Keyboards";
import Project from "../components/interfaces/Project";
import {request, gql} from 'graphql-request';
import Footer from '../components/Footer';






type HomeProps = {
    projectData: Project[]
}

export default function Home(props: HomeProps) {
  return (
    <div className={'bg-gray-50'}>
      <Head>
        <title>Yu Hao Wong</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className={'w-full max-w-screen-xl mx-auto'}>
         <div className={'flex flex-row items-center justify-between m-5'}>
             <div className={'font-extrabold text-3xl'}>
                 Haoyudoing.
             </div>
         </div>


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

         <Footer/>
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

    const projectData = await request(process.env.GRAPH_ENDPOINT || "", query)
        .then((data) => data.projects as Project[])

    return {
        props: {
            projectData: projectData
        }
    }
}
