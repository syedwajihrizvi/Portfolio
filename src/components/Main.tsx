import Box from '@mui/material/Box'
import SideBar from './SideBar'
import Footer from './Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import "../App.css"
import "../assets/css/main.css"
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

function Main() {

    useEffect(() => {
        const mouseSpotlight = document.documentElement.querySelector('.mouse-spotlight') as HTMLElement
        document.addEventListener('mousemove', (event) => {
            if (mouseSpotlight)
                mouseSpotlight.style.left = `${event.clientX}px`
                mouseSpotlight.style.top = `${event.clientY}px`
                mouseSpotlight.style.opacity = '1'
        })

        document.addEventListener('mouseleave', () => {
            if (mouseSpotlight)
                mouseSpotlight.style.left = '0'
                mouseSpotlight.style.top = '0'
                mouseSpotlight.style.opacity = '0'
        })
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <div className='mouse-spotlight'></div>
            <CssBaseline>
                <Box className="main-grid">
                    <Box className="sidebar">
                        <SideBar/>
                    </Box>
                    <Box className="main">
                        <Outlet/>
                    </Box>
                    <Box className="footer">
                        <Footer/>
                    </Box>
                </Box>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default Main