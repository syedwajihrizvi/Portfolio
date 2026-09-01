import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import PublicationCard, { publicationInformation } from "./PublicationCard";
import intro_to_autonomous_mobile_navigation from "../../assets/images/publications/intro_to_auto.webp";
import path_planning from "../../assets/images/publications/path-planning.jpg";

const publications: publicationInformation[] = [
  {
    title: "Introduction to Autonomous Mobile Navigation via Turtlesim",
    description:
      "A hands-on guide to feedback linearization, NID control, and reactive barrier functions using ROS 2 and Turtlesim.",
    viewPublication:
      "https://medium.com/@syedwajihrizvi2000/introduction-to-autonomous-mobile-navigation-via-turtlesim-e495cbd17614",
    image: intro_to_autonomous_mobile_navigation,
  },
  {
    title: "Application of A* and NID for Obstacle Avoidance in Turtlesim",
    description: "Combining our knowledge of A* with NID to navigate obstacles in turtlesim.",
    viewPublication:
      "https://medium.com/@syedwajihrizvi2000/autonomous-robot-navigation-with-a-and-near-identity-diffeomorphism-in-ros-2-75d2f6328ec2?postPublishedType=initial",
    image: path_planning,
  },
];

function Publications() {
  useGSAP(() => {
    gsap.to(".publication-card", {
      opacity: 1,
      duration: 1,
      top: 0,
      stagger: 0.1,
    });
  }, []);

  return (
    <Container className="container">
      <Box className="publications">
        <Box className="publications__header">
          <h3 className="publications__heading">Publications</h3>
          <p className="publications__subtitle">
            A collection of Medium posts and technical notes, arranged in the same responsive card layout as the work
            section.
          </p>
        </Box>
        <Box className="publications__grid">
          {publications.map((publication) => (
            <PublicationCard key={publication.title} information={publication} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Publications;
