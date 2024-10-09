import Box from '@mui/material/Box'
import SideBar from './SideBar'
import Footer from './Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import "../App.css"
import "../assets/css/main.css"
import { Outlet } from 'react-router-dom';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

function Main() {
    return (
        <ThemeProvider theme={darkTheme}>
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