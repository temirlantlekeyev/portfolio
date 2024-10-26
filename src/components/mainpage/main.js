import { useState } from "react"

import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/react.png"
import bootstrap from "../../assets/bootstrap.png"
import tailwind from "../../assets/tailwind.png"
import typescript from "../../assets/typescript.png"
import node from "../../assets/node.png"
import saiahattap from "../../assets/saiahattap.jpg"
import audio from "../../assets/audio.jpg"
import weather from "../../assets/weather.jpg"
import todo from "../../assets/todo.jpg"
import calculator from "../../assets/calculator.png"



import {AiOutlineLink, AiFillGithub} from "react-icons/ai"

const stack = [

    {
        id: 1,
        name: "HTML",
        img: html,
    },

    {
        id: 2,
        name: "CSS",
        img: css,
    },

    {
        id: 3,
        name: "JavaScript",
        img: javascript,
    },

    {
        id: 4,
        name: "React",
        img: react,
    },

    {
        id: 5,
        name: "Bootstarp",
        img: bootstrap,
    },

    {
        id: 6,
        name: "Tailwind",
        img: tailwind,
    },

    {
        id: 7,
        name: "TypeScript",
        img: typescript,
    }
    ,

    {
        id: 8,
        name: "Node JS",
        img: node,
    }

]



const projects = [
    {
        id:1,
        name:"SaiahatTap",
        link: "https://saiahat-tap.vercel.app/",
        github: "https://github.com/temirlantlekeyev/SaiahatTap",
        title: "Geoguessr web application with interesting places in Kazakhstan",
        features: "Educational game with using Leaflet library map and pictures of famous places, where users can find and explore various places of interest throughout Kazakhstan",
        features2: "3 levels in the city Almaty, Astana and throughout Kazakhstan",
        features3: "30 attractions for each level and a timer of 20 seconds for each correct answer",
        features4: "Localization in 3 languages: Kazakh, Russian and English",
        img: saiahattap
    },
    {
        id:2,
        name:"Audio Player",
        link: "https://audio-player-black-gamma.vercel.app",
        github: "https://github.com/temirlantlekeyev/audio_player",
        title: "Web audio player with several musics",
        features: "Mini audio player with 5 songs",
        features2: "Responsive design",
        features3: "Tech Stack: HTML, CSS, JavaScript",
        img: audio
        
    },
    {
        id:3,
        name:"Weather App",
        link: "https://weather-app-fy8d.onrender.com/",
        github: "https://github.com/temirlantlekeyev/weather-app",
        title: "Web Weather App with current weather",
        features: "Weather App with using OpenWeatherMap API",
        features2 : "Responsive design",
        features3: "Tech Stack: HTML, CSS, JavaScript, React",
        img: weather
    },
    {
        id:4,
        name:"To-Do-List",
        link: "https://to-do-list-dun-gamma.vercel.app",
        github: "https://github.com/temirlantlekeyev/to-do-list",
        title: "To-do-list App for daily use and purpose",
        features: "Responsive design",
        features2: "Tech Stack: HTML, CSS, JavaScript, React, Tailwind",
        img: todo
    },
    {
        id:5,
        name:"Calculator",
        link: "https://calculator-six-beryl.vercel.app",
        github: "https://github.com/temirlantlekeyev/calculator",
        title: "IOS Calculator",
        features: "Simple IOS calculator",
        features2: "Responsive design",
        features3: "Tech Stack: HTML, CSS, JavaScript, React",
        img: calculator
    }
]


const Main = ()=> {

    
const [link, setLink] = useState('')

    return (
        <div>
        <div>
        <div className="text-center text-5xl mb-12">
            Tech Stack
        </div>
        <div className="flex flex-row justify-center">
        {stack.map((stacks)=> {
            return (
        <div key={stacks.id} className="ml-8">
        <img className="h-20 bg-slate-800 hover:bg-orange-400 p-3  rounded-full " src={stacks.img}/>
        <p className="text-center">{stacks.name}</p>
        </div>
        )})}
        </div>
        </div>
        
        <div>
        <div className=" m-10 mt-36 text-5xl flex flex-row justify-center ">Projects</div>
        
        <div >
        {projects.map((project)=> {
            return (
            <div key={project.id} className=" bg-slate-900 rounded-2xl m-12 border-4 p-6">
                <div className="">
                    <p className="text-4xl p-4 ">{project.name}</p>
                    <p className="text-xl p-3" >{project.title}</p>
                    <div className="flex flex-row">
                    <img className="h-72 m-6 rounded-2xl border-slate-600 border-4" src={project.img}/>
                   
                    <ul className="m-4 text-2xl text-white">
                        <li className="mb-4">
                        {project.features}
                        </li>
                        <li className="mb-4">
                        {project.features2}
                        </li>
                        <li className="mb-4">
                        {project.features3}
                        </li>
                        <li className="mb-4">
                        {project.features4}
                        </li>
                    </ul>
                    </div>
                    <div className="flex flex-col items-center text-3xl m-16">
                    <a href={project.link} target="_blank" className="flex flex-row self-end mb-3 hover:underline"><AiOutlineLink/>{project.name}</a>
                    <a href={project.github} target="_blank" className="flex flex-row self-end hover:underline"><AiFillGithub/>Github link</a>
                    </div>
                </div>

            </div>
        )})}
        </div>
        </div>
        </div>
    )
}


export default Main;