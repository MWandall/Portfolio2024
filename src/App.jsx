import { IoIosCloudyNight } from "react-icons/io";
import { IoLogoGithub, IoLogoLinkedin, IoLogoDiscord, IoCloudDownload  } from "react-icons/io5";
import { IoDesktopOutline, IoEye } from "react-icons/io5";


const projects = [
  {
    name: "Monster Mayhem",
    image: "/MMscreenshot.png",
    githubLink: "https://github.com/MWandall/project3",
    liveDemoLink: "https://calm-meadow-66160-5c84b96ef414.herokuapp.com/",
  },
  {
    name: "GameU",
    image: "/GameU.png",
    githubLink: "https://github.com/MWandall/gameU",
    liveDemoLink: "https://limitless-mountain-58094-a782c55b0be7.herokuapp.com/",
  },
  {
    name: "GigGuide",
    image: "/GigGuide.png",
    githubLink: "https://github.com/MWandall/concert-finder",
    liveDemoLink: "https://kevinsmithseven.github.io/concert-finder/",
  },

  {
    name: "JATE",
    image: "/JATE.png",
    githubLink: "https://github.com/MWandall/pwaTextEditor",
    liveDemoLink: "https://quiet-reaches-59584-957246460e74.herokuapp.com/",
  },
  {
    name: "E-Commerce Backend",
    image: "/E-commerceBackend.png",
    githubLink: "https://github.com/MWandall/e-commerceBackEnd",
    liveDemoLink: "https://drive.google.com/file/d/1Jmo46EbtmVVWI_YGmUcayLBgoncXWbpu/view",
  },
  {
    name: "Social Network API Backend",
    image: "/SocialNetworkApi.png",
    githubLink: "https://github.com/MWandall/socialNetworkAPI",
    liveDemoLink: "https://drive.google.com/file/d/19Eg94G54tOGbDNm4-JCB45SHi4LEeCm9/view",
  },
];

function App() {
  

  return (
    <>
    <main className="bg-white px-10">
      <section className="  min-h-screen"> 
      <nav className="py-10 mb-12 flex justify-end border-b-2 border-teal-500">
        {/* <h1 className="text-xl"> ~~~ </h1> */}
        <ul className="flex items-center px-1 ">

          {/* <li className="pr-5 text-sm">(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. *</li> */}
          <li className="cursor-pointer hover:scale-125 transition-all ease-in-out shadow-lg p-3 rounded-xl my-2 flex flex-row flex-wrap items-center h-[5rem] bg-gradient-to-r  from-emerald-500 bg-cyan-500 text-gray-900 ">
          <p className=" text-sm">(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. *</p>
            <IoIosCloudyNight className="cursor-pointer text-4xl hover:scale-125 transition-all ease-in-out ml-4" />
          
          </li>

          {/* <li><a className=" bg-gradient-to-r from-emerald-500 bg-cyan-500 px-4 py-2 rounded-lg ml-8 text-white " href="#">  Resume </a></li> */}

          <li><a href="/MitchellWandallResume01.pdf" download="MitchellWandallResume" className="cursor-pointer hover:scale-125 transition-all ease-in-out shadow-lg p-3 rounded-xl my-2 h-[5rem] flex flex-row items-center bg-gradient-to-r from-emerald-500 bg-cyan-500 text-gray-900 ">
        
        <p className="font-bold">Download Resume</p>
           <IoCloudDownload className="text-4xl ml-4 "/>
       
        
        
        
        </a></li>
        </ul>
      
      </nav>
      
      <div className="text-center">
        <h2 className="text-4xl py-2 text-teal-600 font-bold ">Mitchell Wandall</h2>
        <h3 className="text-xl font-semibold">Full Stack Dev</h3>
        <p className="text-lg py-5 leading-8">Freelance Developer for all of your programming and designing needs. Let's collaborate to bring your ideas to life with precision and creativity!</p>
      </div>
      <article className="flex justify-center mt-10">
      <div className="h-80 w-80 rounded-full bg-gradient-to-b from-emerald-500 flex justify-center">
        <img className=" rounded-full " src="../public/Mitchell1.png" alt="picture of mitchell" />
      </div>
      </article>


      <div className="flex flex-col items-center">
      {/* <h1 className="mb-5 text-center shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between w-[50rem] text-center">
        Portfolio Page
      </h1> */}

      <div className="flex justify-center flex-wrap  bg-slate-200 rounded-xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="md:basis-1/2 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between text-center font-bold"
          >
            <img
              className="object-cover h-80 "
              src={project.image}
              alt={`${project.name} screenshot`}
            />

            <div className="flex justify-between pt-5">
              <a href={project.githubLink} target="_blank">
                <IoLogoGithub className="cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
              </a>
              <h2 className="pt-2">{project.name}</h2>
              <a href={project.liveDemoLink} target="_blank">
                <IoDesktopOutline className="cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>



      </section>
      <footer className=' sticky bottom-0  py-5 px-10 bg-gradient-to-r  from-emerald-500 bg-cyan-500 shadow-lg rounded-3xl text-slate-900'>
        <div className='flex flex-row justify-between gap-5 text-[30px]'>
        <a href="https://github.com/MWandall" target='_blank' rel="noreferrer"><IoLogoGithub className='  cursor-pointer hover:scale-125 transition-all ease-in-out'/></a>
        <a href="https://www.linkedin.com/in/mitchell-wandall-1501222a5/" target='_blank' rel="noreferrer"><IoLogoLinkedin className='  cursor-pointer hover:scale-125 transition-all ease-in-out'/></a>
        <a href="https://discord.com/" target='_blank' rel="noreferrer"><IoLogoDiscord className=' cursor-pointer hover:scale-125 transition-all ease-in-out'/></a>
        </div>
        </footer>
    </main>
    </>
  )
}

export default App
