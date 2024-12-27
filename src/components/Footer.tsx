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
                    <LinkedInIcon className="icon"/>
                </Link>
                <Link href="https://github.com/syedwajihrizvi" color='inherit' target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="icon"/>
                </Link>
                <MailIcon className="icon" onClick={() => navigate('/contact')}/>
            </Stack>
            <Box className="button-group">
                <Link href="https://syedwajihrizvi.com/resume.pdf"
                color="inherit" target="_blank" rel="noopener noreferrer">
                    <Button className='button button--primary'>Resume</Button>
                </Link>
            </Box>
        </Box>
    )
}

export default Footer