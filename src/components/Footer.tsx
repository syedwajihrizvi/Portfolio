import Box from "@mui/material/Box"
import { Button, Stack } from "@mui/material"
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate()
    return (
        <Box className="flex-footer">
            <Stack className='contact-icons'>
                <Link href="https://www.linkedin.com/in/syed-wajih-rizvi" color='inherit' target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="icon" fontSize="large"/>
                </Link>
                <Link href="https://github.com/syedwajihrizvi" color='inherit' target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="icon" fontSize="large"/>
                </Link>
                <MailIcon className="icon" fontSize="large" onClick={() => navigate('/contact')}/>
            </Stack>
            <Box className="button-group">
                <Button className='button button--primary'>Resume</Button>
                <Button className='button button--primary' onClick={() => navigate('/contact')}>Get In Touch</Button>
            </Box>
        </Box>
    )
}

export default Footer