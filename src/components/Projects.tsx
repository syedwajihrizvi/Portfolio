import Box from "@mui/material/Box"
import Project from "./projects/Project"
import gamegrid from "../assets/images/projects/gamecom/gamegrid.webp"
import cscape from "../assets/images/projects/cscape/cscape.webp"
import airbnb from "../assets/images/projects/airbnb/airbnb.webp"
import iPhone15 from "../assets/images/projects/apple/iPhone15.png"
import iPhone16 from "../assets/images/projects/apple/iPhone16.webp"

import paintVideoOne from "../assets/videos/paint1.mp4"
import paintVideoTwo from "../assets/videos/paint2.mp4"
import paintVideoThree from "../assets/videos/paint3.mp4"
import restateVideo from "../assets/videos/restate.mp4"
import auroVideo from "../assets/videos/auro.mp4"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MinorProjects, Project as ProjectType } from "../interfaces/Project"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Link } from "@mui/material"
import { renderIcon } from "../utils/icons"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const projects: Array<ProjectType> = [
    {
        description: `A website that serves millions of games from the IGDB API. Create your account,
                browse any game you want, view game trailers, plots, summaries, and reviews. The front end
                was made using React and the Chakra UI library. I made the back end using NodeJS, which
                was paired with a MongoDB database. This was one of the first projects I worked on and
                it really helped introduce me to many full stack concepts. Make sure to visit the
                website and give it a spin. You have to create your account first, but remember NOT to provide
                real information, this is only a demo website!`,
        title: 'GameCom',
        usage: [
            {
                title: 'Typescript',
                description: 'Developed front end with ReactTS and Chakra UI.',
                icon: "typescript"
            },
            {
                title: 'Javascript',
                description: 'Used to build backend server with Node JS. Utilized express and mongoose to develop compatible API.',
                icon: "javascript"
            },
            {
                title: 'MongoDB',
                description: 'Built backend database with MongoDB. Simple, non-relational, and surprisingly scalable.',
                icon: "mongodb"
            }
        ],
        image: gamegrid,
        github: 'https://github.com/syedwajihrizvi/GameCom',
        viewProject: 'https://syed-rizvi-gamecom.netlify.app/'
    },
    {
        description: `An Apple inspired website for the iPhone 16 and iPhone 16 Pro. Contains interactive 3D
                      Models along with highlights of several features. 3D Models were built with
                      ThreeJS and animations done with GSAP. It includes 3D Models for the iPhone 16 as
                      well as the iPhone 16 Pro. You can change the size as well as the color of the models.
                      The website should be viewable on mobile, tablets, laptops, and desktops.`,
        title: 'iPhone 16',
        usage: [
            {
                title: 'Typescript',
                description: 'Building reusable components.',
                icon: "typescript"
            },
            {
                title: 'Javascript',
                description: `Vanilla JS for useEffect animations`,
                icon: "javascript"
            },
            {
                title: 'ThreeJS',
                description: 'Beautiful 3D Rendering of various iPhone 15 Models.',
                icon: "threeJS"
            }
        ],
        image: iPhone16,
        github: 'https://github.com/syedwajihrizvi/iPhone16',
        viewProject: 'https://syed-rizvi-iphone-16.netlify.app/'
    },
    {
        description: `A responsive landing page I made for Airbnb. Just some basic HTML, CSS, and vanilla JS.
                     I'm a huge fan of the look and feel of the Airbnb brand. I decided to make my own landing page for
                     the company. It sort of a parady.`,
        title: 'Airbnb-Parody',
        usage: [
            {
                title: 'HTML',
                description: `Utilized knowledge of grids, flex, and other semantic elements to 
                                generate a responsive layout which works great on all devices.`,
                icon: "html"
            },
            {
                title: 'CSS',
                description: 'Added several hover effects, gradients, and box-shadows to provide great visual feedback',
                icon: "css"
            },
            {
                title: 'Javascript',
                description: `Implemented vanilla javascript for various functionalities such as auto-scroll, 
                             progress bars, and dynamic footers and navbars.`,
                icon: "javascript"
            }
        ],
        image: airbnb,
        github: 'https://github.com/syedwajihrizvi/Airbnb',
        viewProject: 'https://syed-rizvi-air-bnb-parody.netlify.app'

    },
    {
        description: `The first mobile application I ever built. Utilized React Native with Expo to build it. 
                      The backend was made using Appwrite. Appwrite it a free to use web service that essentially
                      provides a wrapped backend for your application. The main focus of this app was just to expose
                      myself to React Native. I learned about the navigation system, the different components such as Views, Flatlist,
                      and Tabs, furthermore I also was able to transfer a lot of my React Web developemt skills over. I built
                      a slide show, however the animations were not working on mobile. Since this was my first, I focused mainly just
                      on the structure and basic functionality. `,
        title: 'Restate',
        usage: [
            {
                title: 'React Native',
                description: `Developed front end of application.`,
                icon: "react-native"
            },
            {
                title: 'Tailwind',
                description: 'Easy to use inline styles',
                icon: "tailwind"
            },
        ],
        iframe: true,
        videos: [restateVideo],
        image: cscape,
        github: 'https://github.com/syedwajihrizvi/Restate.git'
    },
    {
        description: `An application that allows you to explore the various points of interests in any city around
                      the world! View destinations such as cafes, museums, restaurants, amusement parks, and various other
                      points of interest. Get valuable information such as reviews, opening times, website, and contact info.
                      Plan out the entire trip in any city and feed all the places you want to visit into the AI powered backend
                      which willl generate the most effective trip plan for you based on various factors including weather, cost, and time.`,
        title: 'CScape',
        usage: [
            {
                title: 'Typescript',
                description: `Developed front end with React TS and Material UI.`,
                icon: "typescript"
            },
            {
                title: 'Javascript',
                description: 'Used to build server with Node JS. Utilized mongoose and express to develop compatible API.',
                icon: "javascript"
            },
            {
                title: 'Python',
                description: 'Developed alogrithm to calculate most efficient trip plan and implement odometric equations',
                icon: "python"
            }
        ],
        image: cscape,
        github: 'https://github.com/syedwajihrizvi/CScape',
        viewProject: 'https://cscape.netlify.app'
    },
    {
        description: `Built this using React Native. This was the second ever app I buil. Explored various
                      react-native concepts dealing with animations, uploading files, and proper tabs. The
                      coolest part about this was definetly the animations. The trending section in specific
                      was animated using the react-native-animatable library. `,
        title: 'Restate',
        usage: [
            {
                title: 'React Native',
                description: `Developed front end of application.`,
                icon: "react-native"
            },
            {
                title: 'Tailwind',
                description: 'Easy to use inline styles',
                icon: "tailwind"
            },
        ],
        iframe: true,
        videos: [auroVideo],
        image: cscape,
        github: 'https://github.com/syedwajihrizvi/Auro.git'
    },
    {
        description: `A launch site made for the iPhone 15. Built using ReactJS, GSAP, ThreeJS, and Tailwind.
                      It contains a beuatiful video carousel that is very similar to what Apple has on its own website.
                      Furthermore the website includes 3D Models of the iPhone 15 as well. The model can be interacted with,
                      the size can be changed, and the color can be changed as well.`,
        title: 'iPhone 15',
        usage: [
            {
                title: 'Javascript',
                description: `Developed front end with ReactJS and vanilla javascript for animations.`,
                icon: "javascript"
            },
            {
                title: 'ThreeJS',
                description: 'Beautiful 3D Rendering of various iPhone 15 Models.',
                icon: "threeJS"
            },
            {
                title: 'Tailwind',
                description: 'Develop reusable classes and beautiful styling.',
                icon: "tailwind"
            }
        ],
        image: iPhone15,
        github: 'https://github.com/syedwajihrizvi/iPhone15',
        viewProject: 'https://syed-rizvi-iphone-15.netlify.app/'
    },
    {
        description: `This is an omnidirectional mecanum wheel based autonomous robot which can navigate any given path
                      in an enclosed room. It was built as part of my 4th year univeristy captstone project. The robot would
                      take in an DXF file which would essentially be a set of coordinates translated from an AutoCAD file. The
                      algorithm will then determine the best path to navigate the coordinates in the most efficient way possible.
                      Utilzing its on board LiDar, it uses its localization system to navigate the path in a given room. `,
        title: 'P.A.I.N.T',
        usage: [
            {
                title: 'Python',
                description: `Programmed RasberryPi using Python.`,
                icon: "python"
            },
            {
                title: 'Linux',
                description: 'RasberryPi is Linux based so had to utilize several linux commands.',
                icon: "linux"
            },
            {
                title: 'Excel',
                description: 'Collecting localization data and testing algorithm accuracy.',
                icon: "excel"
            }
        ],
        iframe: true,
        videos: [paintVideoOne, paintVideoThree, paintVideoTwo],
        image: cscape,
        github: 'url'
    },
]

const moreProjects: Array<MinorProjects> = [
    {
        title: 'Set',
        description: `An iOS application I built while taking Stanford University's CS193p course.
                      I mainly utilized Swift which is an OOP language and XCode.`,
        tools: ['swift', 'xcode'],
        github: 'https://github.com/syedwajihrizvi/Set'
    },
    {
        title: 'Stock Web Scraper',
        description: `The goal of this project was to build a python script that could scrape the web
                      to perform a SWOT analysis of a given company, which would help investors determine if
                      it was worth putting money into. Using AI mixed with my knowledge of investing, I was able
                      to build somewhat of an alogorithm to determine which stocks would be the best. Honestly, it had
                      potential but if it worked properly, I probably would be somewhere else right now.`,
        tools: ['python', 'excel'],
        github: 'https://github.com/syedwajihrizvi/jaywatch'
    },
    {
        title: 'ACC Controller for Cadillac Lyriq',
        description: `Part of of my University's Alternate Vehicle team. I was tasked by Cadillac itself to program
                      an ACC algorthim they could utilize on the brand new 2024 Cadillac Lyriq. ACC stands for Adaptive
                      Cruise Control and the purpose was to design an algorithm that covered the basic test endpoints.`,
        tools: ['python'],
        github: 'https://github.com/syedwajihrizvi/lyriq_acc'
    },
    {
        title: ' MPC for Cadillac Lyriq',
        description: `Part of of my University's Alternate Vehicle team. I was tasked by Cadillac itself to program
                      a Model Predictive Controller which was able to take in data from the surrounding traffic signals
                      and determine a vehicle's velocity when approaching an intersection.`,
        tools: ['python'],
        github: 'https://github.com/syedwajihrizvi/lyriq_mpc'
    },
    {
        title: 'Renty',
        description: `When I was first attempting to expand my full stack knowledge, I built this application using
                      React 16, Express, and MongoDB. Its relatively simple and provides a user interface for managing a movie
                      rental company.`,
        tools: ['javascript', 'mongodb', 'html'],
        github: 'https://github.com/syedwajihrizvi/renty'
    },
    {
        title: 'Autonomous Banana Peeling Robot',
        description: `This was a robot I built way back in my first year of university. Its primary purpose was to autonomously
                      peel bananas. It was built using an Arduino, several parts were 3D Printed, and it did actually accomplish its
                      goal.`,
        tools: ['arduino', 'autocad']
    }
]

function Projects() {

    useGSAP(() => {
        gsap.to('.project', {
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            left: 0,
            ease: 'power2.inOut'
        })
    })

    return (
        <Box className="projects">
            {projects.map(project => 
                <Project information={project}/>)}
            <Box className="more-projects">
                <Typography variant="h4" sx={{textAlign: 'center'}} className="more-projects__heading">More of my Projects over the years</Typography>
                {moreProjects.map(project => 
                    <Accordion disableGutters sx={{ margin: 0 }}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                            <Box sx={{display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant="h6">{project.title}</Typography>
                                <Box sx={{display: 'flex', gap: '0.5rem'}}>
                                {project.tools.map(tool => 
                                    renderIcon(tool)
                                )}
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{display: 'flex', flexDirection: 'column'}}>
                            {project.description}
                            {project.github && 
                            <Link href={project.github} color='inherit' target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className="icon" sx={{color: 'white'}}/>
                            </Link>}
                        </AccordionDetails>
                    </Accordion>
                )}
            </Box>
        </Box>

    )
}

export default Projects