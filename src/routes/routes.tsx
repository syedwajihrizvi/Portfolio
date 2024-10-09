import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import About from "../components/about/About";
import Work from "../components/work/Work";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {path: '', element: <About/>},
            {path: 'work', element: <Work/>},
            {path: 'projects', element: <Projects/>},
            {path: 'contact', element: <Contact/>}
        ]
    }
])

export default router
