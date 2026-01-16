import { Card, CardActions, CardContent, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skill from "./Skill";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

export type workInformation = {
  companyName: string;
  position: string;
  location: string;
  yearsWorked: string;
  description: string;
  skills: string[];
  detailedPoints: string[];
};

interface Props {
  information: workInformation;
}

function WorkCard({ information }: Props) {
  const [viewMore, setViewMore] = useState(false);

  const renderViewLess = () => {
    return (
      <>
        <CardContent sx={{ padding: "0rem 1rem" }}>
          <Typography className="work-card__description">{information.description}</Typography>
        </CardContent>
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }} />
        <Box className="container container--padding">
          <Box className="work-card__skills">
            {information.skills.map((skill) => (
              <Skill label={skill} />
            ))}
          </Box>
        </Box>
      </>
    );
  };

  const renderViewMore = () => {
    return (
      <CardContent>
        <List disablePadding={true}>
          {information.detailedPoints.map((point) => (
            <ListItem disablePadding={true} disableGutters>
              <ListItemIcon>
                <CheckIcon sx={{ color: "#03fc98" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography className="work-card__points">{point}</Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    );
  };
  return (
    <Card className="work-card" sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box className="work-card__company">
        <Typography className="heading-company">{information.companyName}</Typography>
        <Typography className="heading-position">{information.position}</Typography>
        <Typography className="heading-location">{information.location}</Typography>
        <Typography className="heading-date">{information.yearsWorked}</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {viewMore && renderViewMore()}
        {!viewMore && renderViewLess()}
      </Box>
      <CardActions className="work-card__action" sx={{ mt: "auto" }}>
        <Button className="button button--primary" onClick={() => setViewMore(!viewMore)}>
          {!viewMore && "View More"}
          {viewMore && "View Less"}
        </Button>
      </CardActions>
    </Card>
  );
}

export default WorkCard;
