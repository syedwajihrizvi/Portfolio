import {
  SiTypescript,
  SiAppwrite,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiLinux,
  SiMicrosoftexcel,
  SiSwift,
  SiXcode,
  SiHtml5,
  SiArduino,
  SiAutocad,
  SiTailwindcss,
  SiReact,
  SiStreamlit,
  SiClerk,
  SiRos,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandThreejs, TbBrandCSharp, TbEaseInOutControlPoints } from "react-icons/tb";
import { PiFileSqlFill } from "react-icons/pi";
import { FaAws } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { DiHtml53dEffects } from "react-icons/di";
import matlabimage from "../assets/images/projects/ballbeam/matlab_icon.png";
import simulinkimage from "../assets/images/projects/ballbeam/simulink.png";

export const renderIcon = (icon: string, fontSize: string = "1.5rem") => {
  if (icon == "typescript") return <SiTypescript color="#03fc98" fontSize={fontSize} />;
  if (icon == "javascript") return <SiJavascript color="#03fc98" fontSize={fontSize} />;
  if (icon == "html") return <SiHtml5 color="#03fc98" fontSize={fontSize} />;
  if (icon == "threeJS") return <TbBrandThreejs color="#03fc98" fontSize={fontSize} />;
  if (icon == "tailwind") return <SiTailwindcss color="#03fc98" fontSize={fontSize} />;
  if (icon == "css") return <IoLogoCss3 color="#03fc98" fontSize={fontSize} />;
  if (icon == "mongodb") return <SiMongodb color="#03fc98" fontSize={fontSize} />;
  if (icon == "python") return <SiPython color="#03fc98" fontSize={fontSize} />;
  if (icon == "linux") return <SiLinux color="#03fc98" fontSize="1.5rem" />;
  if (icon == "excel") return <SiMicrosoftexcel color="#03fc98" fontSize={fontSize} />;
  if (icon == "swift") return <SiSwift color="#03fc98" fontSize={fontSize} />;
  if (icon == "xcode") return <SiXcode color="#03fc98" fontSize={fontSize} />;
  if (icon == "html") return <SiHtml5 color="#03fc98" fontSize={fontSize} />;
  if (icon == "arduino") return <SiArduino color="#03fc98" fontSize={fontSize} />;
  if (icon == "autocad") return <SiAutocad color="#03fc98" fontSize={fontSize} />;
  if (icon == "react" || icon == "react-native") return <SiReact color="#03fc98" fontSize={fontSize} />;
  if (icon == "stream") return <SiStreamlit color="#03fc98" fontSize={fontSize} />;
  if (icon == "clerk") return <SiClerk color="#03fc98" fontSize={fontSize} />;
  if (icon == "appwrite") return <SiAppwrite color="#03fc98" fontSize={fontSize} />;
  if (icon == "c#") return <TbBrandCSharp color="#03fc98" fontSize={fontSize} />;
  if (icon == "sql") return <PiFileSqlFill color="#03fc98" fontSize={fontSize} />;
  if (icon == "aws") return <FaAws color="#03fc98" fontSize={fontSize} />;
  if (icon == "java") return <FaJava color="#03fc98" fontSize={fontSize} />;
  if (icon == "matlab") return <img src={matlabimage} alt="Matlab" width="30px" height="100%" />;
  if (icon == "simulink") return <img src={simulinkimage} alt="Simulink" width="30px" height="100%" />;
  if (icon == "controls") return <TbEaseInOutControlPoints color="#03fc98" fontSize={fontSize} />;
  if (icon == "ros") return <SiRos color="#03fc98" fontSize={fontSize} />;
  if (icon == "gazebo") return <DiHtml53dEffects color="#03fc98" fontSize={fontSize} />;
};
