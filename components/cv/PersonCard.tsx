import React, {useState} from 'react'
import {rotate} from "next/dist/server/lib/squoosh/impl";

export function PersonCard({active, name, removePerson, setActive} :{active: boolean, name: string, removePerson:Function, setActive:Function}) {
    return (
        <div className={`overflow-ellipsis rounded-lg w-28 h-44 p-4 flex flex-col items-center justify-center gap-3  ${active ? "bg-blue-500" : "bg-gray-600"}`}>
            <div onClick={()=> setActive( active ? undefined : name)} className={'flex flex-col items-center justify-center gap-3'}>
                <div className={`rounded-full w-16 h-16 items-center justify-center flex  text-4xl cursor-pointer ${active ? "bg-blue-700" : "bg-gray-700"}`}>
                    <div>{name.charAt(0).toLowerCase()}</div>
                </div>
                <small>{name}</small>
            </div>
            <div className={`rotate-45 text-lg font-black text-red-500 p-0 cursor-pointer ${active ? 'invisible' : 'block'}`} onClick={()=>removePerson()}>
                +
            </div>
        </div>
    )
}

export function AddPersonCard({addPerson}:{addPerson:Function}) {
    const [active, setActive] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>("")

    return (
        <div className={`rounded-lg w-28 h-44 p-4 flex flex-col items-center justify-center gap-2  ${active ? "bg-green-500" : "bg-gray-600"}`}>
            <div
                className={`rounded-full w-16 h-16 pt-1 justify-center flex  text-5xl cursor-pointer ${active ? "bg-green-700" : "bg-gray-700"}`}
                onClick={()=>{
                    setActive(true)
                    if (inputValue.length > 0) {
                        addPerson(inputValue)
                    }
                    setTimeout(()=> setActive(false), 200)
                    setInputValue("")
                }}>
                <div>+</div>
            </div>
            <small>Add Person</small>
            <input type={'text'} className={`px-2 rounded-lg w-20 overflow-scroll ${active ? "bg-green-700" : "bg-gray-500"}`} value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
        </div>
    )
}