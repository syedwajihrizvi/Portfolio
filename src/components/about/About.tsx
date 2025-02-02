import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { List, ListItem, ListItemText, ListItemIcon, Paper } from "@mui/material"
import { SiTypescript, SiPython, SiJavascript, SiHtml5, SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { PiFileSqlFill } from "react-icons/pi";
import { motion } from 'framer-motion'
import waterlooLogo from "../../assets/images/about/uni.png"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const MotionBox = motion(Box as any)

function About() {

    const renderPaper = (skill: string) => {
        return <Paper className="skill-paper" elevation={8}>
            {skill}
        </Paper>
    }

    useGSAP(() => {
        gsap.to('.skill-paper', {
            opacity: 1,
            top: 0,
            duration: 0.6,
            stagger: 0.05
        })

        gsap.to('.about__text', {
            scrollTrigger: {
                trigger: '.about',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            left: 0,
            duration: 1,
            stagger: 0.2
        })

        gsap.to('.education-container', {
            opacity: 1,
            top: 0,
            duration: 1
        })
    }, [])

    return (
        <Grid container className="about" columns={{xs: 4, sm: 8, md: 12}}>
            <Grid item xs={6}>
                <Box className="about__heading">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        <Typography variant="h4" className="heading">Syed Wajih Rizvi</Typography>
                        <Typography variant="h5" className="title">Software Engineer at Ford</Typography>
                        <Typography variant="body1" className="intro">
                            I build, test, and deploy applications.
                        </Typography>
                    </MotionBox>
                    <MotionBox className="skills"
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}>
                        <List className="list">
                            <ListItem className="list__item" alignItems="center">
                                <ListItemIcon sx={{marginRight: 0}}>
                                        <SiTypescript color="#03fc98" fontSize='3rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography className="skill__title" fontWeight="900">Typescript</Typography>}/>
                            </ListItem>
                            <ListItem className="list__item" alignItems="center">
                                <ListItemIcon>
                                        <SiJavascript color="#03fc98" fontSize='3rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900" className="skill__title">Javascript</Typography>}/>
                            </ListItem>
                            <ListItem className="list__item" alignItems="center">
                                <ListItemIcon>
                                        <SiPython color="#03fc98" fontSize='3rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900" className="skill__title">Python</Typography>}/>
                            </ListItem>
                            <ListItem className="list__item" alignItems="center">
                                <ListItemIcon>
                                        <FaGithub color="#03fc98" fontSize='3rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900" className="skill__title">Git</Typography>}/>
                            </ListItem>                      
                        </List>
                        <List className="list">
                            <ListItem className="list__item" alignItems="center">
                                <ListItemIcon>
                                        <SiHtml5 color="#03fc98" fontSize='3rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900" className="skill__title">HTML/CSS</Typography>}/>
                            </ListItem>  
                            <ListItem className="list__item" alignItems="center">
                                <ListItemIcon>
                                        <SiMongodb color="#03fc98" fontSize='3rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900" className="skill__title">MongoDB</Typography>}/>
                            </ListItem>
                            <ListItem className="list__item" alignItems="center">
                                <ListItemIcon>
                                        <PiFileSqlFill color="#03fc98" fontSize='3.5rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900" className="skill__title">SQL</Typography>}/>
                            </ListItem>                
                        </List>
                    </MotionBox>
                    <Box className="skills-cards">
                        {renderPaper("React")}
                        {renderPaper("React-Native")}
                        {renderPaper("Django")}
                        {renderPaper("Slash Testing")}
                        {renderPaper("Bootstrap")}
                        {renderPaper("Tailwind")}
                        {renderPaper("Express")}
                        {renderPaper("GSAP")}
                        {renderPaper("ThreeJS")}
                        {renderPaper("MaterialUI")}
                        {renderPaper("ChakraUI")}
                        {renderPaper("Git")}
                        {renderPaper("Vim")}
                        {renderPaper("Jenkins")}
                        {renderPaper("MongoDB")}
                        {renderPaper("MySQL")}
                        {renderPaper("TCL")}
                        {renderPaper("JSON")}
                        {renderPaper("Linux")}
                        {renderPaper("Jira")}
                        {renderPaper("Postman")}
                        {renderPaper("CPython")}
                        {renderPaper("Selenium")}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className="about__description">
                    <Typography className="about__text" variant='h6' gutterBottom>
                        Back in 2018, I began programming due to the creative liberty and the idea of being able
                        to create something from scratch that can used by millions. Jump to today, I now have worked for
                        several companies, created multiple projects, and expanded my skill set to encompass a wide range of 
                        useful technologies. 
                    </Typography>
                    <Typography className="about__text" variant='h6' gutterBottom>
                        My primary focus these days is to build an automation framework to test the cloud capabilities of Ford's next
                        generation vehicles. I serve as the test lead for several components and ensure the product is delivered to the market
                        with the upmost perfection. In my spare time, I like to focus on building Full Stack applications for the web using 
                        popular libraries and frameworks such as React, Express, and Django.
                    </Typography>
                    <Typography className="about__text" variant='h6' gutterBottom>
                        When I'm not coding away, I enjoy several different hobbies such as horse riding, video games, playing football,
                        volunteering at local animal shelters, and watching sports. I would describe myself as a very big animal lover and someone
                        who loves to learn new things.  
                    </Typography>
                    <Typography className="about__text" variant='h6' gutterBottom>
                        I hope to continue to develop my skills and surround myself with people who bring out the best of me.   
                    </Typography>
                    <Box className="education-container" sx={{display: 'flex', gap: '1rem'}}>
                        <img src={waterlooLogo} alt="University of Waterloo"  width="100px" height="100%"/>
                        <Box className="education">
                            <Typography variant="h4" color="white" fontWeight={800} letterSpacing={1.2}>Education</Typography>
                            <Typography variant="h6" sx={{lineHeight: 1, marginBottom: '1'}}>Class of 2023</Typography>
                            <Typography variant="h6" sx={{lineHeight: 1.2}}>Mechanical Engineering and Computer Science</Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default About