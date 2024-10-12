import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { List, ListItem, ListItemText, ListItemIcon, Paper } from "@mui/material"
import { SiTypescript, SiPython, SiJavascript, SiHtml5, SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr"
import { motion } from 'framer-motion'
import waterlooLogo from "../../assets/images/about/uni.png"

const MotionBox = motion(Box)

function About() {
    const renderPaper = (skill: string) => {
        return <Paper className="skill-paper" elevation={8} sx={{padding: '1.8rem', color: '#03fc98'}}>
            {skill}
        </Paper>
    }

    return (
        <Grid container className="about" columns={{xs: 4, sm: 8, md: 12}}>
            <Grid item xs={6}>
                <Box className="about__heading">
                    <Typography variant="h4" className="heading">Syed Wajih Rizvi</Typography>
                    <Typography variant="h5" className="title">Software Engineer</Typography>
                    <Typography variant="body1" className="intro">
                        I build, test, and deploy applications.
                    </Typography>
                    <Box className="skills">
                        <List className="list">
                            <ListItem className="list__item" alignItems="flex-start">
                                <ListItemIcon>
                                        <SiTypescript color="#03fc98" fontSize='2rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900">Typescript</Typography>}
                                    secondary={
                                        <Typography className="text">Use it to build front end applications.</Typography>
                                    }/>
                            </ListItem>
                            <ListItem className="list__item" alignItems="flex-start">
                                <ListItemIcon>
                                        <SiPython color="#03fc98" fontSize='2rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900">Python</Typography>}
                                    secondary={
                                        <Typography className="text">Webscraping, backend, and testing.</Typography>
                                    }/>
                            </ListItem>
                            <ListItem className="list__item" alignItems="flex-start">
                                <ListItemIcon>
                                        <SiJavascript color="#03fc98" fontSize='2rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900">Javascript</Typography>}
                                    secondary={
                                        <Typography className="text">Mainly use it for setting up backend.</Typography>
                                    }/>
                            </ListItem>
                            <ListItem className="list__item" alignItems="flex-start">
                                <ListItemIcon>
                                        <FaGithub color="#03fc98" fontSize='2rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900">Git</Typography>}
                                    secondary={
                                        <Typography className="text">Managing code and working with others.</Typography>
                                    }/>
                            </ListItem>                      
                        </List>
                        <List className="list">
                            <ListItem className="list__item" alignItems="flex-start">
                                <ListItemIcon>
                                        <SiHtml5 color="#03fc98" fontSize='2rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900">HTML/CSS</Typography>}
                                    secondary={
                                        <Typography className="text">To build beautiful webpages.</Typography>
                                    }/>
                            </ListItem>  
                            <ListItem className="list__item" alignItems="flex-start">
                                <ListItemIcon>
                                        <SiMongodb color="#03fc98" fontSize='2rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900">MongoDB</Typography>}
                                    secondary={
                                        <Typography className="text">Utilize it for simple non-relational databases.</Typography>
                                    }/>
                            </ListItem>
                            <ListItem className="list__item" alignItems="flex-start">
                                <ListItemIcon>
                                        <GrMysql color="#03fc98" fontSize='2rem'/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={<Typography fontWeight="900">SQL</Typography>}
                                    secondary={
                                        <Typography className="text">Utilized for relational databases.</Typography>
                                    }/>
                            </ListItem>                
                        </List>
                    </Box>
                    <MotionBox
                    initial={{opacity:0, y:1500}}
                    animate={{opacity:1, y: 0}}
                    transition={{duration: 0.8, type: 'spring'}}
                    sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem'}}>
                        {renderPaper("React")}
                        {renderPaper("Node")}
                        {renderPaper("Django")}
                        {renderPaper("Slash Testing")}
                        {renderPaper("Bootstrap")}
                        {renderPaper("Express")}
                        {renderPaper("MaterialUI")}
                        {renderPaper("ChakraUI")}
                        {renderPaper("Jest Testing")}
                        {renderPaper("Git")}
                        {renderPaper("Vim")}
                        {renderPaper("Jenkins")}
                        {renderPaper("Mongoose")}
                        {renderPaper("MySQL")}
                        {renderPaper("TCL")}
                        {renderPaper("JSON")}
                        {renderPaper("Linux")}
                        {renderPaper("Jira")}
                        {renderPaper("Postman")}
                        {renderPaper("CPython")}
                        {renderPaper("Selenium")}
                    </MotionBox>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <MotionBox 
                initial={{opacity:0, x: 1500}} 
                animate={{opacity: 1, x: 0}} 
                transition={{duration: 0.8, type: 'spring'}} className="about__description">
                    <Typography variant='h6' gutterBottom>
                        Back in 2018, I began programming due to the creative liberty and the idea of being able
                        to create something from scratch that can used by millions. Jump to today, I now have worked for
                        several companies, created multiple projects, and expanded my skill set to encompass a wide range of 
                        useful technologies. 
                    </Typography>
                    <Typography variant='h6' gutterBottom>
                        My primary focus these days is to build an automation framework to test the cloud capabilities of Ford's next
                        generation vehicles. I serve as the test lead for several components and ensure the product is delivered to the market
                        with the upmost perfection. In my spare time, I like to focus on building Full Stack applications for the web using 
                        popular libraries and frameworks such as React and Express.
                    </Typography>
                    <Typography variant='h6' gutterBottom>
                        When I'm not coding away, I enjoy several different hobbies such as horse riding, video games, playing football,
                        volunteering at local animal shelters, and watching sports. I would describe myself as a very big animal lover and someone
                        who loves to learn new things.  
                    </Typography>
                    <Typography variant='h6' gutterBottom>
                        I hope to continue to develop my skills and surround myself with people who bring out the best of me.   
                    </Typography>
                    <Box sx={{display: 'flex', gap: '1rem'}}>
                        <img src={waterlooLogo} alt="University of Waterloo"  width="100px" height="100%"/>
                        <Box>
                            <Typography variant="h4" color="white">Education</Typography>
                            <Typography variant="h6">Class of 2023</Typography>
                            <Typography variant="h6">Mechanical Engineering and Computer Science</Typography>
                        </Box>
                    </Box>
                </MotionBox>
            </Grid>
        </Grid>
    )
}

export default About