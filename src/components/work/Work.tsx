import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import WorkCard from "./WorkCard"
import { workInformation } from "./WorkCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const companies:workInformation[] = [
    {
        companyName: "Ford Motor Company",
        position: "Lead Software Automation Engineer",
        location: "Kanata, ON",
        yearsWorked: "2023-Present",
        description: `Was the lead automation tester for several cloud components that were imperative in
                      Ford's next generation vehicles. Perform functional testing, integration testing, and hardware
                      testing to ensure product was delivered with upmost perfection. Out of all of Ford's cloud components,
                      the components I was the lead of were ranked the highest in terms of testing scores and code coverage across
                      the Ford Software Team.`,
        skills: ["Python", "Automation", "Functional Testing", "Docker", "Jenkins", "Git", 
                 "Integration Testing", "Vim", "Hardware Testing", "Linux", "TestRails", "Slash", "TestRails"],
        detailedPoints: [
            "Maintained 100% rainy day coverage across all testing requirements.",
            "Provided code coverage over 90% on all product code.",
            "Provided 95% branch coverage on all product code.",
            "Ensure each development requirement had atleast 3 Rainy Days and 1 Happy Path test case.",
            "Reduced code duplication to under 2% across all managed repositories using SonarQube.",
            "Refactored code to reducde cognitive complexity via analysis of SonarQube",
            "Developed hundreds of test cases every software cycle using Python and Slash Testing Framework.",
            "Worked closely with Developers to identify Priority bugs and fix them accordingly.",
            "Analyzed logs using VIM and several useful Linux commands.",
            "Configured automation pipelines using Jenkins to run test suits for functional, integration, and hardware tests"
        ]
    },
    {
        companyName: "Ford Motor Company",
        position: "Bluetooth Software Test Engineer",
        yearsWorked: "2021-2023",
        location: "Waterloo, ON",
        description: `I served as one the automation engineers for the infotainment systems in many of Ford's vehicles. My primary goal
                      was to test several scenarios between a connected user device and Ford's infotainment system. 
                      I wrote several automation tests, developed command line tools to analyze logs, and also in certain scenarios
                      manually tested Ford's vehicles as well. `,
        skills: ["Python", "Automation", "Functional Testing", "Git", "Selenium",
                 "Integration Testing", "Hardware Testing", "TestRails", "Slash", "TestRails"],
        detailedPoints: [
            "Developed test cases that covered various Bluetooth protocols using Python’s Slash Testing Framework.",
            "Programmed unit tests in Python to mock several API calls and ensure a minimum 90% code coverage.",
            "Optimized Jenkin nodes to improve Sanity run time by nearly 28%.",
            "Developed APIs and CLI tools that provide several text analysis methods for log files.",
            "Debugged automation scripts through log files, breakpoints, and GUI inspection.",
            "Utilized Appium to conduct automation tests and analyze android applications.",
            "Performed version management using Git Bash and contributed to company’s Continuous Integration Pipelines."
        ]
    },
    {
        companyName: "Solace",
        position: "Software Automation Engineer",
        location: "Kanata, ON",
        yearsWorked: "2020-2021",
        description: `Served as a co-op who was responsible for migrating APIs from XML to JSON. I was tasked with
                      developing proper functional test cases for every single end point and modifying existing scripts to cover
                      new functionality. The testing code was done using TCL, however I used Java Spring Boot to develop
                      Restful API endpoints. I also implemented several security protocols to remove client sensitive information
                      from log files.`,
        skills: ["Java", "Automation", "Functional Testing", "TCL", "SVN", "Linux", "Git", "Postman", "Vim", "SpringBoot"],
        detailedPoints: [
            "Developed functional test cases using TCL to verify several API Endpoints.",
            "Utilized SVN to perform version management",
            "Replaced API functionaly to work with JSON instead of XML.",
            "Tested API Endpoints using Postman to verify data.",
        ]
    },
    {
        companyName: "ADP Canada",
        position: "Process Consultant",
        location: "Toronto, ON",
        yearsWorked: "2019",
        description: `I was tasked with analyzing the several processes that employees used throughout their workdays. I developed 
                      Standard Operating Procedures (SOPs) for over 100 different processes and anlalyzed them via several metrics including 
                      Time, Cost, and Efficiency. I was able to work closely with the Robotics Process Automation (RPA) team to identify certain processes
                      that could be automated to improve efficiency. The effort helped identify improvements that could be implemented
                      to save ADP an upword of nearly $500, 000 annually.`,
        skills: ["Excel", "Visio", "Python", "Blue Prism"],
        detailedPoints: [
            "Analyzed 100s of operating procedures and developed SOPs to document them.",
            "Utilized metrics such as Time, Cost, and Usage to identify bottle necks in processes.",
            "Optimized analysis time using Excel to properly determine improvement oppurtunites.",
            "Worked with RPA team to develop algorithm to determine cost savings via automation.",
            "Identified process improvements that could save company upward of $500, 000 annually.",
            "Participated in SCRUM meetings with managers and direcotors to update them on automation."
        ]
    }
]

function Work() {
    useGSAP(() => {
        gsap.to('.work-card', {
            opacity: 1,
            duration: 1,
            top: 0,
            stagger: 0.1
        })
    }, [])

    return (
        <Container className="container">
            <Box className="work">
                {companies.map(workInfo => <WorkCard information={workInfo}/>)}
            </Box>
        </Container>
    )
}

export default Work