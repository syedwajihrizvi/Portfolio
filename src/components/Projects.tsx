import Box from "@mui/material/Box"
import Project from "./projects/Project"
import gamegrid from "../assets/images/projects/gamecom/gamegrid.png"
import cscape from "../assets/images/projects/cscape/cscape.png"
import paintVideoOne from "../assets/videos/paint1.mp4"
import paintVideoTwo from "../assets/videos/paint2.mp4"
import paintVideoThree from "../assets/videos/paint3.mp4"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MinorProjects, Project as ProjectType } from "../interfaces/Project"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Link } from "@mui/material"
import { renderIcon } from "../utils/icons"

const projects: Array<ProjectType> = [
    {
        description: `A website that serves thousands of games from the IGDB API. Create your account,
                browse any game you want, view game trailers, plots, summaries, and reviews. The front end
                was made using React and the Chakra UI library. I made the back end using NodeJS, which
                was paired with a MongoDB database. This was one of the first projects I worked on and
                it really helped introduce me too many full stack concepts. Make sure to visit the
                website and give it a spin. You have to create your account first, but remember NOT to provide
                real information, this is only a demo website!`,
        title: 'GameCom',
        usage: [
            {
                title: 'Typescript',
                description: 'Developed front end with React TS and Chakra UI.',
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
        github: 'url',
        viewProject: 'url'
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
        github: 'url',
        viewProject: 'url'
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
    }
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
                      Cruise Control and the purpose was to build a rudimentaly algorithm that covered the basic test endpoints.`,
        tools: ['python'],
        github: 'https://github.com/syedwajihrizvi/lyriq_acc'
    },
    {
        title: ' MPC for Cadillac Lyriq',
        description: `Part of of my University's Alternate Vehicle team. I was tasked by Cadillac itself to program
                      a Model Predictive Controller which was able to take in data from the surrounding traffic signal
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
    return (
        <Box className="projects">
            {projects.map(project => 
                <Project information={project}/>)}
            <Box className="more-projects">
                <Typography variant="h4" sx={{textAlign: 'center'}}>More of my Projects over the years</Typography>
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