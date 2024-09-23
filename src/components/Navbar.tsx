import { useGSAP } from "@gsap/react"
import { TextPlugin } from 'gsap/TextPlugin';

import gsap from "gsap";

const Navbar = () => {
    useGSAP(() => {
        gsap.to('#project', {
            duration: 1,
            text: "projects",
            type: 'diff',
            ease: 'back.inOut'
        }),
        gsap.to('#blog', {
            duration: 1,
            text: "blog",
            ease: 'back.inOut'
        }),
        gsap.to('#films', {
            duration: 1,
            text: "flims",
            ease: 'back.inOut'
        }),
        gsap.to('#about', {
            duration: 1,
            text: "about",
            ease: 'back.inOut'
        })
    },[])

  return (
    <nav className='flex space-x-2 justify-center w-fit'>
        <a href="" id="project"className="nav-link">p</a>
        <a href="" id="blog"className="nav-link">b</a>
        <a href="" id="about"className="nav-link">a</a>
        <a href="" id="films"className="nav-link border-none">f</a>
    </nav>
  )
}

export default Navbar