import React from 'react';
import Image from "next/image";
import nextjs from '/public/static/nextjs.svg';

export default function Footer() {
    return (
        <div className={'text-xs opacity-40 w-full p-3'}>
            <div className={'text-center'}>
                Yu Hao Wong © 2023
            </div>
        </div>
    )
}