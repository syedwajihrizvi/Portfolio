import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SideBar() {
    const navigate = useNavigate()
    const [active, setActive] = useState('')

    const onSideBarClick = (name: string) => {
        setActive(name)
        navigate(name)
    }

    const renderSideBarClass = (name: string) => {
        if (name == active) {
            return 'sidebar-button sidebar-button-active'
        }
        return 'sidebar-button'
    }

    return (
        <Box className='flex-bar'>
            <Typography className={renderSideBarClass('')} align='center' variant='h5' onClick={() => onSideBarClick('')}>About</Typography>
            <Typography className={renderSideBarClass('work')} align='center' variant='h5' onClick={() => onSideBarClick('work')}>Work</Typography>
            <Typography className={renderSideBarClass('projects')} align='center' variant='h5' onClick={() => onSideBarClick('projects')}>Projects</Typography>
            <Typography className={renderSideBarClass('contact')} align='center' variant='h5' onClick={() => onSideBarClick('contact')}>Contact</Typography>
        </Box>
    )
}

export default SideBar