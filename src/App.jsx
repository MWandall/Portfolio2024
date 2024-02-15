import { IoIosCloudyNight } from "react-icons/io";
import { IoLogoGithub, IoLogoLinkedin, IoCloudDownload, IoCodeWorking, IoMailOutline  } from "react-icons/io5";
import { IoDesktopOutline } from "react-icons/io5";
import { useState } from "react";



const projects = [
  {
    name: "Monster Mayhem",
    text: "A full stack game concept.",
    image: "/MMscreenshot.png",
    githubLink: "https://github.com/MWandall/project3",
    liveDemoLink: "https://calm-meadow-66160-5c84b96ef414.herokuapp.com/",
  },
  {
    name: "GameU",
    text: "Full stack game review/social media.",
    image: "/GameU.png",
    githubLink: "https://github.com/MWandall/gameU",
    liveDemoLink: "https://limitless-mountain-58094-a782c55b0be7.herokuapp.com/",
  },
  {
    name: "GigGuide",
    text: "Find music events in your area for a spontaneous outing.",
    image: "/GigGuide.png",
    githubLink: "https://github.com/MWandall/concert-finder",
    liveDemoLink: "https://kevinsmithseven.github.io/concert-finder/",
  },

  {
    name: "JATE",
    text: "A downloadable progressive web app text editor.",
    image: "/JATE.png",
    githubLink: "https://github.com/MWandall/pwaTextEditor",
    liveDemoLink: "https://quiet-reaches-59584-957246460e74.herokuapp.com/",
  },
  {
    name: "E-Commerce Backend",
    text: "SQL back end for e-commerce.",
    image: "/E-commerceBackend.png",
    githubLink: "https://github.com/MWandall/e-commerceBackEnd",
    liveDemoLink: "https://drive.google.com/file/d/1Jmo46EbtmVVWI_YGmUcayLBgoncXWbpu/view",
  },
  {
    name: "Social Network API Backend",
    text: "NoSQL(MongoDB) backend for a social media site.",
    image: "/SocialNetworkApi.png",
    githubLink: "https://github.com/MWandall/socialNetworkAPI",
    liveDemoLink: "https://drive.google.com/file/d/19Eg94G54tOGbDNm4-JCB45SHi4LEeCm9/view",
  },
];


function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
    <div className={darkMode ? "dark" : ""}>
    <main className="bg-slate-300 px-10 dark:bg-slate-900 dark:text-white">
      <section className="  min-h-screen"> 
      
      <nav className="py-10 mb-12 flex justify-between border-b-2 border-teal-500 ">
        <div className="hidden md:block">
        <div className="flex flex-col gap-7 text-4xl ">
        <a href="https://github.com/MWandall" target='_blank' rel="noreferrer"><IoLogoGithub className='  cursor-pointer hover:scale-125 transition-all ease-in-out'/></a>
        <a href="https://www.linkedin.com/in/mitchell-wandall-1501222a5/" target='_blank' rel="noreferrer"><IoLogoLinkedin className='  cursor-pointer hover:scale-125 transition-all ease-in-out'/></a>
        
        </div>
        </div>
        <div>
        <ul className="flex items-center px-1 mx-auto">

          {/* <li className="pr-5 text-sm">(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. *</li> */}
          <li onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer hover:scale-125 transition-all ease-in-out shadow-lg p-3 m-2 rounded-xl my-2 flex flex-row flex-wrap justify-center items-center h-[5rem] bg-gradient-to-r  from-emerald-500 bg-cyan-500 text-gray-900 ">
          <p className=" text-sm hidden md:block">(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. *</p>
            <IoIosCloudyNight  className="cursor-pointer text-4xl hover:scale-125 transition-all ease-in-out ml-4 " />
          
          </li>

          {/* <li><a className=" bg-gradient-to-r from-emerald-500 bg-cyan-500 px-4 py-2 rounded-lg ml-8 text-white " href="#">  Resume </a></li> */}

          <li><a href="/MitchellWandallResume01.pdf" download="MitchellWandallResume" className="cursor-pointer hover:scale-125 transition-all ease-in-out shadow-lg p-3 rounded-xl my-2 h-[5rem] text- flex flex-row items-center bg-gradient-to-r from-emerald-500 bg-cyan-500 text-gray-900 ">
        
        <p className="font-bold">Download Resume</p>
           <IoCloudDownload className="text-4xl md:ml-4 "/>
       
        
        
        
        </a></li>
        </ul>
        </div>
      
      </nav>
      
      <div className="md:flex justify-evenly ">
      <div className="text-center flex flex-col justify-center ">
        <h2 className="text-4xl py-2 text-teal-600 font-bold md:text-7xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">Mitchell Wandall</h2>
        <h3 className="text-xl font-semibold md:text-2xl">Full Stack Developer</h3>
        <p className="text-lg py-5 leading-8 max-w-xl mx-auto md:text-xl">Freelance Developer for all of your programming and designing needs. Let's collaborate to bring your ideas to life with precision and creativity!</p>
      </div>
      <article className="flex justify-center mt-10 border-2 border-teal-600 rounded-full p-5 ">
      <div className="h-80 w-80 rounded-full bg-gradient-to-b from-emerald-500 flex justify-center md:h-96 md:w-96">
        <img className=" rounded-full " src="/Mitchell1.png" alt="picture of mitchell" />
      </div>
      </article>
      </div>

      <section className=" ">
        <h1 className="text-5xl font-bold text-center py-20 px-5  md:text-left md:mx-20">Services:</h1>
        
        <div className="flex flex-col py-5 md:flex-row">
          <div className="flex flex-col px-10">

            <div className="flex flex-col items-center justify-between md:border-r-2 border-teal-600 md:flex-row">
          <h3 className=" text-2xl font-bold text-center">Web Design:</h3>
          <img className="h-32 w-32 mx-11 my-5" src="./color-palette_11096498.png" alt="color-palette" />
          </div>

          <p className="py-5 px-1 mb-28 md:border-r-2 border-teal-600 text-center md:pr-7">I specialize in creating tailor-made websites from scratch, ensuring they perfectly align with your brand identity and business goals. Through intuitive user interfaces, I ensure that every aspect of your website is meticulously crafted to provide an exceptional user experience.</p>
          </div>
          <div className="flex flex-col px-10">

          <div className="flex flex-col items-center justify-between md:border-r-2 border-teal-600 md:flex-row">
          <h3 className=" text-2xl font-bold text-center">Website Maintenance and Support:</h3>
          <img className="h-32 w-32 mx-11 my-5" src="pencil-case_11096713.png" alt="tool-bag" />
          </div>
          <p className="py-5 px-1 mb-28 md:border-r-2 border-teal-600 text-center md:pr-7">Providing ongoing maintenance and support services to ensure that your website or web application remains secure, up-to-date, and optimized for performance. Whether it's fixing bugs, implementing new features, or performing regular updates, I offer comprehensive support to keep your online presence running smoothly and your visitors engaged.</p>
          </div>
          <div className="flex flex-col px-10">

          <div className="flex flex-col items-center justify-between md:border-r-2 border-teal-600 md:flex-row">
          <h3 className=" text-2xl font-bold text-center">Back-end Development:</h3>
          <img className="h-32 w-32 mx-11 my-5 " src="alignment_11096605.png" alt="computer-server" />
          </div>

          <p className="py-5 px-1 mb-11 md:border-r-2 border-teal-600 text-center md:pr-7">Leveraging my expertise in back-end technologies such as Node.js, MongoDB/Atlas, or SQL, I develop robust server-side architectures and database solutions to power your web applications. From user authentication and data storage to API integrations and performance optimization, I ensure that your back-end infrastructure is secure, efficient, and scalable.</p>
          </div>
        </div>
      </section>

      <h1 className="text-5xl font-bold text-center py-20 px-5 md:text-left md:mx-20">Projects:</h1>
      <div className="flex flex-col items-center pb-[90px] ">
      {/* <h1 className="mb-5 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between w-[50rem] text-center">
        Portfolio Page
      </h1> */}

      <div className="flex justify-center flex-wrap md:mx-20 bg-slate-200 rounded-xl  dark:bg-slate-600 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="md:basis-1/2 md:px-10 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between text-center font-bold border-2 border-teal-700"
          >
            <img
              className="object-cover h-80 "
              src={project.image}
              alt={`${project.name} screenshot`}
            />

            <div className="flex justify-between pt-5">
            <div className="flex flex-col items-center">
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <IoLogoGithub className="cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
              </a>
              <p>GitHub</p>
              </div>
              <div>
              <h2 className="pt-2 text-2xl">{project.name}</h2>
              <p className="text-small text-gray-600 dark:text-white">{project.text}</p>
              </div>

              <div className="flex flex-col items-center">
              <a href={project.liveDemoLink} target="_blank" rel="noreferrer">
                <IoDesktopOutline className="cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
              </a>
              <p>Demo</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>



      </section>

      <div className="pb-5">
        <h3 className="text-2xl">Mitchell Wandall</h3>
        <h4 className="text-xl"><a href="mailto:mitchellwandall01@gmail.com" className="cursor-pointer hover:text-blue-500">mitchellwandall01@gmail.com</a></h4>
      </div>

      <footer className='bgBlur sticky bottom-0  py-5 px-10 
      border-emerald-700 border-4 dark:text-white shadow-lg rounded-3xl text-slate-900'>
        <div className='flex flex-row justify-between gap-5 text-[30px]'>
        <a href="https://github.com/MWandall" target='_blank' rel="noreferrer"><IoLogoGithub className='  cursor-pointer hover:scale-125 transition-all ease-in-out'/></a>
        <a href="https://www.linkedin.com/in/mitchell-wandall-1501222a5/" target='_blank' rel="noreferrer"><IoLogoLinkedin className='  cursor-pointer hover:scale-125 transition-all ease-in-out'/></a>
        <a href="mailto:mitchellwandall01@gmail.com"><IoMailOutline  className=' cursor-pointer hover:scale-125 transition-all ease-in-out'/></a>
        </div>
        </footer>
    </main>
    </div>
    </>
  )
}

export default App
