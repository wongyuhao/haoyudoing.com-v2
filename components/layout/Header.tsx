import React from 'react'
import Link from "next/link";

const Header = () => (
    <div className={'w-full flex flex-row items-center justify-between p-5'}>
        <Link className={'font-bold text-3xl'} href={'/'}>
            Haoyudoing.
        </Link>
    </div>
)

export default Header;