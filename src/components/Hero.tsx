import Navbar from "./Navbar"
import { useGSAP } from "@gsap/react"
import { TextPlugin } from 'gsap/TextPlugin';

import gsap from "gsap";

gsap.registerPlugin(TextPlugin)

const Hero = () => {

    useGSAP(() => {
        gsap.to('#hidden-first', {
            duration: 1,
            text: "mohit",
            type: 'diff',
            ease: 'back.inOut'
        }),
        gsap.to('#hidden-last', {
            duration: 1,
            text: "yadav",
            ease: 'back.inOut'
        })

    },[])

  return (
    <main className='nunito-bold h-screen w-screen flex flex-col'>
        <h1 className='text-3xl flex justify-center pt-4'>
            <span id="hidden-first">m</span>
            <span id="hidden-last">y</span>
        </h1>
        <div></div>
        <Navbar />
    </main>
  )
}

export default Hero