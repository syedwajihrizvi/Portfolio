import Box from "@mui/material/Box";
import Project from "./projects/Project";
import airbnb from "../assets/images/projects/airbnb/airbnb.webp";
import iPhone15 from "../assets/images/projects/apple/iPhone15.png";
import iPhone16 from "../assets/images/projects/apple/iPhone16.webp";
import hirvo from "../assets/images/projects/hirvo/hirvo.png";
import paintVideoOne from "../assets/videos/paint1.mp4";
import paintVideoTwo from "../assets/videos/paint2.mp4";
import paintVideoThree from "../assets/videos/paint3.mp4";
import ballandbeamVideo from "../assets/videos/balance_beam.mp4";
import ece687Video from "../assets/videos/ece_687_video_1.5x.mp4";
import pathtraversalvideo from "../assets/videos/path-traversal-turtlebot.mp4";
import pandaVideo from "../assets/videos/panda_pick_place.mp4";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import { MinorProjects, Project as ProjectType } from "../interfaces/Project";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Link } from "@mui/material";
import { renderIcon } from "../utils/icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const projects: Array<ProjectType> = [
  {
    description: `Hirvo is an app I have decided to develop. It started of as a simple passion project to broaden my skills, but I soon realized that it had the potential to be something much bigger.
                     Hirvo is an AI-powered job search and recruitment platform that streamlines every step of the hiring journey. Candidates can upload resumes, 
                     record video introductions, and connect directly with recruiters through chat or video calls. 
                        With features like Quick Apply, AI-driven job matching, and smart interview prep, 
                     Hirvo makes finding and landing your next opportunity faster and more personal. 
                     Whether you’re a job seeker or an employer, Hirvo brings efficiency and connection to the hiring experience.`,
    title: "Hirvo",
    usage: [
      {
        title: "Java",
        description: "For Spring Backend.",
        icon: "java",
      },
      {
        title: "SQL",
        description: `Database was made using PostgreSQL`,
        icon: "sql",
      },
      {
        title: "React",
        description: "React Native for building mobile application",
        icon: "react",
      },
    ],
    image: hirvo,
    github: "https://github.com/syedwajihrizvi/hirvo",
    viewProject: "https://hirvo.ca/",
  },
  {
    description: `This project implements autonomous pick-and-place manipulation using a 7-DOF Franka Emika Panda robotic arm in simulation.
                Inverse kinematics is used to compute joint configurations that place the end effector at desired Cartesian positions
                and orientations, while a joint-space PD controller drives the manipulator toward each target configuration. The system
                executes a complete manipulation sequence including approach, grasp, lift, transport, placement, gripper actuation, and
                end-effector retreat. Custom grasp poses and orientations are defined for different objects to account for geometry,
                reachability, and collision constraints. ROS 2, Gazebo, and RViz are used to control, simulate, and visualize the robot
                throughout the manipulation pipeline.`,

    title: "Franka Emika Panda Pick and Place",

    usage: [
      {
        title: "ROS 2",
        description:
          "Built ROS 2 nodes and control logic for commanding the Panda arm, executing manipulation sequences, and controlling the gripper.",
        icon: "ros",
      },
      {
        title: "Gazebo / RViz",
        description:
          "Simulated the 7-DOF Franka Panda and visualized joint motion, end-effector poses, object interaction, and pick-and-place trajectories.",
        icon: "gazebo",
      },
      {
        title: "Python",
        description:
          "Implemented inverse kinematics, joint-space PD control, Cartesian target generation, grasp sequencing, and object-specific manipulation logic.",
        icon: "python",
      },
    ],

    iframe: true,
    videos: [pandaVideo],
    videoPlaybackSpeed: 4.0,
    image: airbnb,
    github: "https://github.com/syedwajihrizvi/6_dof",
  },
  {
    description: `This project implements autonomous path planning and traversal for a TurtleBot3 in a simulated maze environment.
                  A custom occupancy grid is generated from the Gazebo world and obstacles are inflated based on the physical
                  dimensions of the robot. The A* algorithm is then used to determine the shortest collision-free path between
                  the robot and a selected goal. ROS 2, AMCL, EKF sensor fusion, TF coordinate transformations, and a custom
                  path-following controller are used to localize the robot and navigate the generated path.`,

    title: "A* Path Traversal for Turtlebot3",

    usage: [
      {
        title: "ROS 2",
        description: "Built ROS 2 nodes for mapping, localization, path planning, and robot control.",
        icon: "ros",
      },
      {
        title: "Gazebo/Rviz",
        description: "Simulated the TurtleBot3 and visualized maps, LiDAR data, localization, and planned paths.",
        icon: "gazebo",
      },
      {
        title: "Python",
        description: "Implemented A* path planning, obstacle inflation, coordinate conversions, and path traversal.",
        icon: "python",
      },
    ],

    iframe: true,
    videos: [pathtraversalvideo],
    videoPlaybackSpeed: 2.0,
    image: airbnb,
    github: "https://github.com/syedwajihrizvi/astar",
  },
  {
    description: `This is an omnidirectional mecanum wheel based autonomous robot which can navigate any given path
                      in an enclosed room. It was built as part of my 4th year univeristy captstone project. The robot would
                      take in an DXF file which would essentially be a set of coordinates translated from an AutoCAD file. The
                      algorithm will then determine the best path to navigate the coordinates in the most efficient way possible.
                      Utilzing its on board LiDar, it uses its localization system to navigate the path in a given room. `,
    title: "Autonomous Omnidirectional Robot with Lidar",
    usage: [
      {
        title: "Python",
        description: `Programmed RasberryPi using Python.`,
        icon: "python",
      },
      {
        title: "Linux",
        description: "RasberryPi is Linux based so had to utilize several linux commands.",
        icon: "linux",
      },
      {
        title: "MATLAB",
        description: "Tuning controllers and plotting localization data.",
        icon: "matlab",
      },
    ],
    iframe: true,
    videos: [paintVideoOne, paintVideoThree, paintVideoTwo],
    image: airbnb,
    github: "url",
  },
  {
    description: `A classical control systems project focused on stabilizing and positioning a steel ball on a double-rod beam using an 
                 inclined lever mechanism driven by a DC servo motor. The system employs an inner-loop discrete controller for precise motor 
                 gear position tracking and an outer-loop controller for real-time ball position control. Using continuous-to-discrete 
                 emulation and anti-stiction compensation, the system processes feedback from a resistive potentiometer beam sensor and 
                 gear angle sensor via an Arduino platform.`,
    title: "Ball and Beam Balance",
    usage: [
      {
        title: "MATLAB",
        description:
          "Used for system identification, pole-placement/lag compensator design, continuous-to-discrete conversion, and extracting precise transfer function coefficients.",
        icon: "matlab",
      },
      {
        title: "Control Systems",
        description:
          "Applied cascaded inner/outer-loop control architecture, classical feedback compensation, discrete-time conversion, and non-linear stiction cancellation algorithms.",
        icon: "controls",
      },
      {
        title: "Simulink",
        description:
          "Utilized to model full system dynamics, simulate step responses, evaluate reference saturators, and verify closed-loop discrete time performance before hardware deployment.",
        icon: "simulink",
      },
    ],
    iframe: true,
    videos: [ballandbeamVideo],
    videoPlaybackSpeed: 2.0,
    image: airbnb,
    github: "",
  },
  {
    description: `A robot tasked with autonomously navigating to a hockey stick platform, picking it up using a RR Manupilator, and then shooting a puck into a goal. The robot utilized various an NID controller combined
              with Control Lyanpunov Functions and Control Barrier Functions to achieve each task. Though the robot completed the task in simulation, its physical parameters were not tuned properly to
              achieve the same results in the real world. `,
    title: "Hockey Player Robot",
    usage: [
      {
        title: "ROS 2",
        description: "Develop the various nodes of the project and communicate with other robots.",
        icon: "ros",
      },
      {
        title: "Python",
        description: "Programmed the various nodes of the project and implemented the control algorithms.",
        icon: "python",
      },
      {
        title: "Linux",
        description: "Utilized several linux commands to run the various nodes and communicate with other robots.",
        icon: "linux",
      },
    ],
    iframe: true,
    videos: [ece687Video],
    videoPlaybackSpeed: 1.0,
    image: airbnb,
    github: "",
  },
  {
    description: `An Apple inspired website for the iPhone 16 and iPhone 16 Pro. Contains interactive 3D
                      Models along with highlights of several features. 3D Models were built with
                      ThreeJS and animations done with GSAP. It includes 3D Models for the iPhone 16 as
                      well as the iPhone 16 Pro. You can change the size as well as the color of the models.
                      The website should be viewable on mobile, tablets, laptops, and desktops.`,
    title: "iPhone 16",
    usage: [
      {
        title: "Typescript",
        description: "Building reusable components.",
        icon: "typescript",
      },
      {
        title: "Javascript",
        description: `Vanilla JS for useEffect animations`,
        icon: "javascript",
      },
      {
        title: "ThreeJS",
        description: "Beautiful 3D Rendering of various iPhone 16 Models.",
        icon: "threeJS",
      },
    ],
    image: iPhone16,
    github: "https://github.com/syedwajihrizvi/iPhone16",
    viewProject: "https://syed-rizvi-iphone-16.netlify.app/",
  },
  {
    description: `A launch site made for the iPhone 15. Built using ReactJS, GSAP, ThreeJS, and Tailwind.
                      It contains a beuatiful video carousel that is very similar to what Apple has on its own website.
                      Furthermore the website includes 3D Models of the iPhone 15 as well. The model can be interacted with,
                      the size can be changed, and the color can be changed as well.`,
    title: "iPhone 15",
    usage: [
      {
        title: "Javascript",
        description: `Developed front end with ReactJS and vanilla javascript for animations.`,
        icon: "javascript",
      },
      {
        title: "ThreeJS",
        description: "Beautiful 3D Rendering of various iPhone 15 Models.",
        icon: "threeJS",
      },
      {
        title: "Tailwind",
        description: "Develop reusable classes and beautiful styling.",
        icon: "tailwind",
      },
    ],
    image: iPhone15,
    github: "https://github.com/syedwajihrizvi/iPhone15",
    viewProject: "https://syed-rizvi-iphone-15.netlify.app/",
  },
  {
    description: `A responsive landing page I made for Airbnb. Just some basic HTML, CSS, and vanilla JS.
                     I'm a huge fan of the look and feel of the Airbnb brand. I decided to make my own landing page for
                     the company. It sort of a parady.`,
    title: "Airbnb",
    usage: [
      {
        title: "HTML",
        description: `Utilized knowledge of grids, flex, and other semantic elements to 
                                generate a responsive layout which works great on all devices.`,
        icon: "html",
      },
      {
        title: "CSS",
        description: "Added several hover effects, gradients, and box-shadows to provide great visual feedback",
        icon: "css",
      },
      {
        title: "Javascript",
        description: `Implemented vanilla javascript for various functionalities such as auto-scroll, 
                             progress bars, and dynamic footers and navbars.`,
        icon: "javascript",
      },
    ],
    image: airbnb,
    github: "https://github.com/syedwajihrizvi/Airbnb",
    viewProject: "https://syed-rizvi-air-bnb-parody.netlify.app",
  },
];

const moreProjects: Array<MinorProjects> = [
  {
    title: "Pint",
    description: `An uber clone app I was working on currently which implements google maps and stripe payments.
                      Building through react-native, tailwind, clerk, and NeonDB.`,
    tools: ["typescript", "tailwind", "clerk"],
    github: "https://github.com/syedwajihrizvi/Pint",
  },
  {
    title: "Set",
    description: `An iOS application I built while taking Stanford University's CS193p course.
                      I mainly utilized Swift which is an OOP language and XCode.`,
    tools: ["swift", "xcode"],
    github: "https://github.com/syedwajihrizvi/Set",
  },
  {
    title: "Stock Web Scraper",
    description: `The goal of this project was to build a python script that could scrape the web
                      to perform a SWOT analysis of a given company, which would help investors determine if
                      it was worth putting money into. Using AI mixed with my knowledge of investing, I was able
                      to build somewhat of an alogorithm to determine which stocks would be the best. Honestly, it had
                      potential but if it worked properly, I probably would be somewhere else right now.`,
    tools: ["python", "excel"],
    github: "https://github.com/syedwajihrizvi/jaywatch",
  },
  {
    title: "ACC Controller for Cadillac Lyriq",
    description: `Part of of my University's Alternate Vehicle team. I was tasked by Cadillac itself to program
                      an ACC algorthim they could utilize on the brand new 2024 Cadillac Lyriq. ACC stands for Adaptive
                      Cruise Control and the purpose was to design an algorithm that covered the basic test endpoints.`,
    tools: ["python"],
    github: "https://github.com/syedwajihrizvi/lyriq_acc",
  },
  {
    title: " MPC for Cadillac Lyriq",
    description: `Part of of my University's Alternate Vehicle team. I was tasked by Cadillac itself to program
                      a Model Predictive Controller which was able to take in data from the surrounding traffic signals
                      and determine a vehicle's velocity when approaching an intersection.`,
    tools: ["python"],
    github: "https://github.com/syedwajihrizvi/lyriq_mpc",
  },
  {
    title: "Renty",
    description: `When I was first attempting to expand my full stack knowledge, I built this application using
                      React 16, Express, and MongoDB. Its relatively simple and provides a user interface for managing a movie
                      rental company.`,
    tools: ["javascript", "mongodb", "html"],
    github: "https://github.com/syedwajihrizvi/renty",
  },
  {
    title: "Autonomous Banana Peeling Robot",
    description: `This was a robot I built way back in my first year of university. Its primary purpose was to autonomously
                      peel bananas. It was built using an Arduino, several parts were 3D Printed, and it did actually accomplish its
                      goal.`,
    tools: ["arduino", "autocad"],
  },
];

function Projects() {
  useGSAP(() => {
    gsap.to(".project", {
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      left: 0,
      ease: "power2.inOut",
    });
  });

  return (
    <Box className="projects">
      {projects.map((project) => (
        <Project information={project} />
      ))}
      <Box className="more-projects">
        <Typography variant="h4" sx={{ textAlign: "center" }} className="more-projects__heading">
          More of my Projects over the years
        </Typography>
        {moreProjects.map((project) => (
          <Accordion disableGutters sx={{ margin: 0 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h6">{project.title}</Typography>
                <Box sx={{ display: "flex", gap: "0.5rem" }}>{project.tools.map((tool) => renderIcon(tool))}</Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              {project.description}
              {project.github && (
                <Link href={project.github} color="inherit" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="icon" sx={{ color: "white" }} />
                </Link>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
