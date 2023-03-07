import React, {ReactElement, useState} from "react";
import cvAPIResponse from "../interfaces/cvAPI";
import ImageCard from "./ImageCard";
import demoResponse from './demo_response.json'
import {PersonCard, AddPersonCard} from "./PersonCard";
import cvLineItem from "../interfaces/cvAPI";


const ENDPOINT =  "https://haoyudoing-cv.41jinkddvfm6q.us-west-2.cs.amazonlightsail.com/cv";

export function CVAppPanel({data, setData}:{data: cvAPIResponse | undefined, setData: Function}) {
    const [file, setFile] = useState<File | undefined>(undefined)
    const [original, setOriginal] = useState<ReactElement | undefined>(undefined)

    const [loadingDemo, setLoadingDemo] = useState<boolean>(false)

    const [activeOwner, setActiveOwner] = useState<string | undefined>(undefined)
    const [ownersList, setOwnersList] = useState<Set<string>>(new Set())
    const [ownerMap, setOwnerMap] = useState<Map<string, Set<cvLineItem>>>(new Map())

    const addPerson = (name:string) => {
        const copy = new Set(ownersList)
        copy.add(name)
        setOwnersList(copy)

    }


    const removePerson = (name:string) => {
        const copy = new Set(ownersList)
        copy.delete(name)
        setOwnersList(copy)
    }

    const assignToOwner = (owner: string | undefined, item: cvLineItem) => {
        if (owner) {
            // assign to owner
            const copy = ownerMap
            if (!ownerMap.has(owner)) {
                ownerMap.set(owner, new Set<cvLineItem>())
            }

            ownerMap.get(owner)?.add(item)
        } else {

        }
    }


    return (
        <div className={'w-1/2 h-full bg-gray-700 h-[calc(100vh-64px)] overflow-y-auto p-4'}>

            <FileUpload setData={setData} setOriginal={setOriginal} file={file} setFile={setFile} />

            <div className={'border-2 border-yellow-300 p-3 rounded-lg'}>
                <b>Note: </b>This pipeline can occasionally fail under certain image conditions. We discuss some of these issues <a href={'#cv-discussion'} className={'styled'}>here</a>. To best demonstrate this project, try this demo image that was used during testing.
                <div 
                    onClick={()=>{
                        setLoadingDemo(true)
                        setOriginal(<ImageCard imageURL="https://haoyudoing-cv.s3.us-west-2.amazonaws.com/demo/91b35e03-7b66-4930-949e-d155337b2698/demo1.png" title="Original"/>)

                        setTimeout(()=> {
                            setLoadingDemo(false)
                            setData(demoResponse)
                        },2000)

                    }}

                    className={'p-2 bg-blue-600 w-fit rounded-lg my-2 cursor-pointer'}>
                        Try Demo Image
                </div>
                {loadingDemo && <p className={'text-sm opacity-70 loading text-left'}>Working</p>}
            </div>
            {/*{*/}
            {/*    data &&*/}
            {/*    <div className={'overflow-x-scroll flex flex-row gap-3 py-3 scrollbar-hide'}>*/}
            {/*        <AddPersonCard addPerson={addPerson}/>*/}
            {/*        {*/}
            {/*            Array.from(ownersList).map((owner, i) => {*/}
            {/*                return <PersonCard active={activeOwner === owner} name={owner} key={i} removePerson={()=>removePerson(owner)} setActive={setActiveOwner}/>*/}
            {/*            })*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*}*/}

            <div className={'flex flex-col my-4'}>
                {data && <p>Items found: {data.items.length}</p>}
                {data?.items.map(
                    (item, i) => <CVLineItem obj={item} key={i} activeOwner={activeOwner} assignToOwner={assignToOwner}/>
                )}
            </div>
            
            {
            original && 
            <div>
                <hr className={'my-4'}/>
                <p className='text-lg font-bold'>Pipeline Steps </p>
                {data && <small>Total Time Elapsed: {data.total_elapsed}s</small>}
                <div className={'grid grid-cols-3 grid-flow-row gap-5 my-4'}>
                    {original}
                    {
                        ...((data && data.images.length === 5) ?
                            [
                                <ImageCard title={'Edges'} imageURL={data.images[0]} key={1}/>,
                                <ImageCard title={'Region Detection'} imageURL={data.images[1]} key={2}/>,
                                <ImageCard title={'Perspective Warp'} imageURL={data.images[2]} key={3}/>,
                                <ImageCard title={'Binarization'} imageURL={data.images[3]} key={4}/>,
                                <ImageCard title={'Text Detection'} imageURL={data.images[4]} key={5}/>
                            ]: [])
                    }
                </div>
            </div>
            }

            




        </div>
    )
}

const FileUpload = ({setData, setOriginal, file, setFile}:{ setData: Function, setOriginal:Function, file:File | undefined, setFile: Function}) => {
    const [waiting, setWaiting] = useState<boolean>(false)
    const hiddenFileInput:React.Ref<HTMLInputElement> = React.useRef(null);



    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (hiddenFileInput != null && hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event && event.target && event.target.files) {
            const fileUploaded = event?.target?.files[0] || undefined;
            setFile(fileUploaded)
            setData(undefined)
            setOriginal(<ImageCard imageURL={URL.createObjectURL(fileUploaded)} title={'Original Image'} key={0}/>)
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setWaiting(true)
        setData(undefined)
        const Upload = async () => {
            await fetch(ENDPOINT, {
                method: 'POST',
                body: formData,
            })
                .then((resp) => {
                    if (resp.status === 200) {
                        resp.json().then(data => {
                            console.log(data)
                            setData(data)
                            return data
                        })
                    } else if (resp.status === 400) {
                        alert('error')
                    }

                })
                .catch(e=> console.error(e))
                .finally(()=>{
                    setWaiting(false)

                });
        };
        Upload();
    };

    return (
        <div className={'bg-gray-700 relative w-full'}>
            <form
                onSubmit={handleSubmit}
                className="flex flex-row mb-4 p-4 justify-between items-center bg-gray-600 border-gray-500 border-1 rounded-lg "
                encType="multipart/form-data"
            >
                <div className={'flex items-center gap-5'}>
                    <div onClick={handleClick} className={'cursor-pointer bg-gray-500 py-1 px-2 rounded-lg font-medium'}>
                        Browse
                    </div>
                    <input type="file"
                           id="image"
                           name="file"
                           accept="image/*"
                           ref={hiddenFileInput}
                           onChange={handleChange}
                           style={{display:'none'}}
                    />
                    <div>{file ? file.name: "Select a file"}</div>
                </div>


                <div className="flex items-center gap-5">
                    <div className={'w-20'}>
                        {waiting && <p className={'text-sm opacity-70 loading text-left'}>Working</p>}
                    </div>
                    <button type="submit" className="py-1 px-2 bg-blue-600 text-white font-medium rounded-lg">
                        Upload
                    </button>
                </div>

            </form>
        </div>
    );
};


const CVLineItem = ({obj, activeOwner, assignToOwner}:{obj:cvLineItem, activeOwner: string | undefined, assignToOwner:Function}) => {
    const [owner, setOwner] = useState(obj.owner)
    return (
        <div
            className={`bg-gray-600 flex flex-row justify-between py-4 px-5 my-1 rounded-lg ${activeOwner ? 'cursor-pointer' : ''}`}
            onClick={()=> {
                obj.owner = activeOwner
                assignToOwner(activeOwner, obj)
                setOwner(activeOwner)
            }}
        >

            <div>
                <p className={'font-bold'}>{obj.name}</p>
                <p>{owner}</p>
            </div>
            <p>$ {obj.value}</p>
        </div>
    )
}