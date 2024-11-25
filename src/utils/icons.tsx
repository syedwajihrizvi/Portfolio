import { SiTypescript, SiJavascript, 
        SiMongodb, SiPython, SiLinux, SiMicrosoftexcel, 
        SiSwift, SiXcode, SiHtml5, SiArduino, SiAutocad  } from "react-icons/si"
import { IoLogoCss3 } from "react-icons/io";

export const renderIcon = (icon: string, fontSize: string = '1.5rem') => {
    if (icon == "typescript")
        return <SiTypescript color="#03fc98" fontSize={fontSize}/>
    if (icon == "javascript")
        return <SiJavascript color="#03fc98" fontSize={fontSize}/>
    if (icon == "html")
        return <SiHtml5 color="#03fc98" fontSize={fontSize}/>
    if (icon == "css")
        return <IoLogoCss3 color="#03fc98" fontSize={fontSize}/>
    if (icon == "mongodb")
        return <SiMongodb color="#03fc98" fontSize={fontSize}/>
    if (icon == "python")
        return <SiPython color="#03fc98" fontSize={fontSize}/>
    if (icon == "linux")
        return <SiLinux color="#03fc98" fontSize='1.5rem'/>
    if (icon == "excel")
        return <SiMicrosoftexcel color="#03fc98" fontSize={fontSize}/>
    if (icon == "swift")
        return <SiSwift color="#03fc98" fontSize={fontSize}/>
    if (icon == "xcode")
        return <SiXcode color="#03fc98" fontSize={fontSize}/>
    if (icon == "html")
        return <SiHtml5 color="#03fc98" fontSize={fontSize}/>
    if (icon == "arduino")
        return <SiArduino color="#03fc98" fontSize={fontSize}/>
    if (icon == "autocad")
        return <SiAutocad color="#03fc98" fontSize={fontSize}/>
}
