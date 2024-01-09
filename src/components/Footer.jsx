import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoDiscord  } from "react-icons/io5";

function Footer() {
  return (
    <footer className=' sticky bottom-0 p-10 '>
        <div className='flex flex-row justify-between gap-5 text-[30px]'>
        <a href="https://github.com/MWandall" target='_blank'><IoLogoGithub className='  cursor-pointer hover:scale-125 transition-all ease-in-out'/></a>
        <a href="https://www.linkedin.com/" target='_blank'><IoLogoLinkedin className='  cursor-pointer hover:scale-125 transition-all ease-in-out'/></a>
        <a href="https://discord.com/" target='_blank'><IoLogoDiscord className=' cursor-pointer hover:scale-125 transition-all ease-in-out'/></a>
        </div>
        </footer>
  )
}

export default Footer