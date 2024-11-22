import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Project as ProjectType } from "../../interfaces/Project"
import { List, ListItem, Divider, ListItemText, ListItemIcon, Link } from "@mui/material"
import Typography from "@mui/material/Typography"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoIcon from '@mui/icons-material/Info';
import SummarizeIcon from '@mui/icons-material/Summarize';

import { motion } from 'framer-motion'
import { useState } from "react"
import { renderIcon } from "../../utils/icons"

const MotionBox = motion(Box as any)

type infoButton = {
    info: boolean,
    usage: boolean,
    isAnimating: boolean
}

interface Props {
    information: ProjectType
}

function Project({information}: Props) {
    const [viewProjectInfo, setViewProjectInfo] = useState(false)
    const [infoButton, setInfoButton] = useState<infoButton>({info: false, usage: true, isAnimating: false})

    const handleInfoButtonSelect = () => {
        setInfoButton({isAnimating: true, info: !infoButton.info, usage: !infoButton.usage})
    }

    const handleInitialProjectInfoAnimationState = () => {
        if (infoButton.info)
            return {y:-1500, opacity: 0}
        return {y: 0, opacity: 1}
    }

    const handleFinalProjectInfoAnimationState = () => {
        if (infoButton.info)
            return {y: 0, opacity: 1}
        return {y: -1500, opacity: 0}
    }

    const handleInitialProjectUsageAnimationState = () => {
        if (infoButton.usage)
            return {y:1500, opacity: 0}
        return {y: 0, opacity: 1}
    }

    const handleFinalProjectUsageAnimationState = () => {
        if (infoButton.usage)
            return {y:0, opacity: 1}
        return {y: 1500, opacity: 0}
    }

    const handleAnimationStateComplete = () => {
        setInfoButton({...infoButton, isAnimating: false})
        setViewProjectInfo(!viewProjectInfo)
    }

    const renderVideos = () => {
        return <Box className='project__videos'>
                    {information?.videos?.map(video => 
                    <video
                    playsInline 
                    muted autoPlay loop src={video}
                    style={{ width: '100%', height: '100%' }}
                    ></video>)}
              </Box>
    }

    const projectInfo = () =>
        <MotionBox initial={handleInitialProjectInfoAnimationState()} 
                   animate={handleFinalProjectInfoAnimationState()} 
                   transition={{duration: 0.3}}
                   onAnimationComplete={infoButton.isAnimating ? handleAnimationStateComplete : undefined} 
                   className="project__info">
            <Typography className="project__info__text">
                {information.description}
            </Typography>
        </MotionBox>

    const projectUsage = () =>
        <MotionBox initial={handleInitialProjectUsageAnimationState()} 
                   animate={handleFinalProjectUsageAnimationState()} 
                   transition={{duration: 0.3}}
                   onAnimationComplete={infoButton.isAnimating ? handleAnimationStateComplete : undefined}>
            <List className="list project__usage">
                {information.usage.map(data =>
                    <>
                    <ListItem className="list__item" alignItems="flex-start">
                        <ListItemIcon>
                            {renderIcon(data.icon)}
                        </ListItemIcon>
                        <ListItemText
                            primary={<Typography fontWeight="900">{data.title}</Typography>}
                            secondary={
                                <Typography className="text">{data.description}</Typography>
                            }/>
                        </ListItem>
                        <Divider variant="inset"component="li" />
                    </>
                )}
            </List>
        </MotionBox>      

    return (
        <Container className="project shadow">
            <Grid className="project__grid" container spacing={2}>
                <Grid className="project__img" item xs={12} md={6}>
                    {!information.iframe && <img src={information.image}/>}
                    {information.iframe && renderVideos()}
                </Grid>
                <Grid className="project__desc" item xs={12} md={6}>
                    <Box className="project__desc__content">
                        <Box className="project__desc__data">
                            {viewProjectInfo && projectInfo()}
                            {!viewProjectInfo && projectUsage()}
                        </Box>
                        <Box className="project__buttons">
                        {information.viewProject &&
                        <Link href={information.viewProject} color='inherit' target="_blank" rel="noopener noreferrer">
                            <Button className='project__button button--primary' startIcon={<LaunchIcon/>}>
                            Vist {information.title}
                            </Button>
                        </Link>
                        }
                        <Link href={information.github} color='inherit' 
                              target="_blank" rel="noopener noreferrer">
                            <Button className='project__button button--git' startIcon={<GitHubIcon/>}>
                            Source Code
                            </Button>
                        </Link>
                            <Button className='project__button button--info' startIcon={viewProjectInfo ? <SummarizeIcon/>:<InfoIcon/>} onClick={handleInfoButtonSelect}>
                                {!viewProjectInfo && "View Info"}
                                {viewProjectInfo && "Overview"}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Project