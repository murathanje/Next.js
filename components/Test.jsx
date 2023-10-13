'use client'

import '@styles/globals.css'
import '@scripts/script.js'
import dynamic from 'next/dynamic';

const Script = dynamic(() => import('@scripts/script.js'), { ssr: false });
const Test = () => {
    <><Script /></> 
}

export default Test;